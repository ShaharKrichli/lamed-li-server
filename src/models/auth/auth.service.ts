// External Libraries
import { Injectable, NotFoundException } from '@nestjs/common';
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

        token = await bcrypt.hash(restoreCode, Number(process.env.BCRYPT_SALT));

        this.tokenRepository.create({ email, token });

        return {
            accessToken: this.jwtService.sign({ email, role: Role.AUTH_PROCESS }),
        };
    }

    async restorationCode(code: string, email: string) {
        const token = await this.tokenRepository.findByPk(email);
        if (!token) {
            throw new NotFoundException('Email doesnt exist.');
        }

        const isMatch = await bcrypt.compare(code, token.token);
        if (!isMatch) {
            throw new NotFoundException('Code doesnt match.');
        }

        return {
            accessToken: this.jwtService.sign({ email, role: Role.RESET_PASSWORD }),
        };

    }

    async resetPassword(password: string) {

    }
}
