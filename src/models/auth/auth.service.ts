// External Libraries
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { config } from 'dotenv';

// services
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/common/constants/roles';
import { UserRepository } from './user.repository';
import { generateRandomNumber } from 'src/utilities/global';
import { TokenRepository } from './token.repository';

const bcrypt = require('bcrypt');

config();
@Injectable()
export class AuthenticationService {
    constructor(
        private jwtService: JwtService,
        private readonly userRepository: UserRepository,
        private readonly tokenRepository: TokenRepository
    ) { }

    async login(email: string, password: string) {

    }

    async forgotPassword(email: string) {
        const user = await this.userRepository.findByPk(email);
        if (!user) {
            throw new NotFoundException('Email doesnt exist.');
        }

        let token = this.tokenRepository.findByPk(email);
        if (token) {
            await this.tokenRepository.destroy({ where: { email } });
        }

        let restoreCode = generateRandomNumber()

        // TODO: send email with restoreCode

        // use shaharkrichli123@gmail.com

        token = await bcrypt.hash(restoreCode, Number(process.env.BCRYPT_SALT));

        this.tokenRepository.create({ email, token });

        return {
            accessToken: this.jwtService.sign({ email, role: Role.AUTH_PROCESS }),
        };
    }

    async restorationCode(code: string, email: string) {
        const token = await this.tokenRepository.findByPk(email);

        if (!token) {
            throw new NotFoundException('User doesnt exist.');
        }

        const isMatch = await bcrypt.compare(code, token.token);

        if (!isMatch) {
            throw new NotFoundException('Code doesnt match.');
        }

        return {
            accessToken: this.jwtService.sign({ email, role: Role.RESET_PASSWORD }),
        };

    }

    async resetPassword(password: string, email: string) {
        const user = await this.userRepository.findByPk(email);

        if (!user) {
            throw new NotFoundException('User doesnt exist.');
        }

        const token = await this.tokenRepository.findByPk(email);

        if (!token) {
            throw new NotFoundException('User doesnt exist.');
        }

        const hashedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT));

        await Promise.all([this.userRepository.updateUserTable(email, { password: hashedPassword }),
        this.tokenRepository.destroy({ where: { email } })])

        // TODO: send email that password reset was successful

        return {
            accessToken: this.jwtService.sign({ email, role: user.role }),
        };
    }

    async refreshTokens(email: string, refreshToken: string) {
        const user = await this.userRepository.findByPk(email);
        if (!user || !user.refreshToken) throw new UnauthorizedException('Access Denied');
        let refreshTokenMatches = await bcrypt.compare(refreshToken, user.refreshToken)
        if (!refreshTokenMatches) throw new UnauthorizedException('Access Denied');
        const tokens = await this.getTokens(email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }


    async getTokens(email: string) {
        // TODO: Need to add prev roles for tokens.
        const accessToken = this.jwtService.sign({ email }, { secret: process.env.JWT_ACCESS_SECRET, expiresIn: '30m', })
        const refreshToken = this.jwtService.sign({ email }, { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '30d', });
        return { accessToken, refreshToken };
    }


    async hashData(data: string) {
        return await bcrypt.hash(data, Number(process.env.BCRYPT_SALT));
    }

    async updateRefreshToken(email: string, refreshToken: string) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.userRepository.updateUserTable(email, { refreshToken: hashedRefreshToken, });
    }
}