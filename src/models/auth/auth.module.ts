// External Libraries
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

// Authentication
import { AuthenticationController } from './auth.controller';
import { AuthenticationService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_ACCESS_SECRET,
            signOptions: { expiresIn: '1800s' },
        }),
    ],
    providers: [AuthenticationService],
    controllers: [AuthenticationController],
})
export class AuthenticationModule { }
