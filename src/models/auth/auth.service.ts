// External Libraries
import { BadRequestException, Injectable } from '@nestjs/common';
import { config } from 'dotenv';

// Interfaces
import { IToken } from './interfaces/IToken';

// services
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/common/constants/roles';


import { v4 as uuidv4 } from 'uuid';

config();
@Injectable()
export class AuthenticationService {
    constructor(
        private jwtService: JwtService,
    ) { }

    async login(userTz: string) {

    }
}
