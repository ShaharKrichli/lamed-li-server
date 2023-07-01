// External Libraries
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

// Authentication
import { AuthenticationController } from './auth.controller';
import { AuthenticationService } from './auth.service';

// repos
import { TokenRepository } from './token.repository';
import { UserRepository } from './user.repository';

// providers
import { authProviders } from './auth.providers';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_ACCESS_SECRET,
            signOptions: { expiresIn: '30m' },
        }),
    ],
    providers: [AuthenticationService, TokenRepository, UserRepository, ...authProviders],
    controllers: [AuthenticationController],
})
export class AuthenticationModule { }
