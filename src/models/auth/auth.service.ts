// External Libraries
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { config } from 'dotenv';

// services
import { JwtService } from '@nestjs/jwt';

// roles
import { ROLE_LITERALS, Role } from 'src/common/constants/roles';

// utils
import { generateRandomNumber } from 'src/utilities/global';

// repos
import { TokenRepository } from './token.repository';
import { UserRepository } from './user.repository';

// dto
import { AuthDto } from './dto/auth.dto';

const bcrypt = require('bcrypt');

config();
@Injectable()
export class AuthenticationService {
    constructor(
        private jwtService: JwtService,
        private readonly userRepository: UserRepository,
        private readonly tokenRepository: TokenRepository
    ) { }

    async login({ email, password }: AuthDto) {
        const user = await this.userRepository.findByPk(email);
        if (!user) throw new NotFoundException('User doesnt exist');

        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) throw new BadRequestException('Password is incorrect');

        const tokens = await this.getTokens(email, user.role);
        await this.updateRefreshToken(email, tokens.refreshToken);
        return tokens;
    }

    async forgotPassword(email: string) {

        const user = await this.userRepository.findByPk(email);
        if (!user) throw new NotFoundException('User doesnt exist');

        let token = this.tokenRepository.findByPk(email);
        if (token) await this.tokenRepository.destroy({ where: { email } });

        let restoreCode = generateRandomNumber()

        // TODO: send email with restoreCode

        const hashedRestoreCode = await this.hashData(restoreCode.toString());

        this.tokenRepository.create({ email, token: hashedRestoreCode });

        return {
            accessToken: this.jwtService.sign({ email, role: Role.AUTH_PROCESS }),
        };
    }

    async restorationCode(code: string, email: string) {
        const token = await this.tokenRepository.findByPk(email);

        if (!token) throw new NotFoundException('reset password session has over, try again..');

        const isMatch = await bcrypt.compare(code, token.token);

        if (!isMatch) throw new NotFoundException('Code doesnt match.');

        return {
            accessToken: this.jwtService.sign({ email, role: Role.RESET_PASSWORD }),
        };

    }

    async resetPassword(password: string, email: string) {
        const user = await this.userRepository.findByPk(email);

        if (!user) throw new NotFoundException('User doesnt exist.');
        
        const token = await this.tokenRepository.findByPk(email);

        if (!token) throw new NotFoundException('reser password session has over, try again..');
        

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

        const tokens = await this.getTokens(email,user.role);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }


    async getTokens(email: string, role: ROLE_LITERALS) {
        const accessToken = this.jwtService.sign({ email, role })
        const refreshToken = this.jwtService.sign({ email, role }, { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '7d', });
        return { accessToken, refreshToken };
    }

    async hashData(data: string) {
        return await bcrypt.hash(data, Number(process.env.BCRYPT_SALT));
    }

    async updateRefreshToken(email: string, refreshToken: string) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.userRepository.updateUserTable(email, { refreshToken: hashedRefreshToken, });
    }

    async logout(email: string) {
        return this.userRepository.update(email, { refreshToken: null });
    }
}