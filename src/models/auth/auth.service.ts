// External Libraries
import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';


// services
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/common/constants/roles';

config();
@Injectable()
export class AuthenticationService {
    constructor(
        private jwtService: JwtService,
    ) { }

    async login(email: string,password: string) {

    }

    async forgotPassword(email: string) {

    }

    async restorationCode(code: string) {

    }

    async resetPassword(password: string) {

    }
}
