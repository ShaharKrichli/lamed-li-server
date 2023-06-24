// External Libraries
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

// Authentication
import { AuthenticationController } from './auth.controller';
import { AuthenticationService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import envVar from 'src/utilities/env-var';
import { authProviders } from './auth.providers';
import { AnalyticsService } from '../analytics/analytics.service';
import { AnalyticsRepository } from '../analytics/analytics.repository';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: envVar.TOKEN_SECRET,
            signOptions: { expiresIn: '1800s' },
        }),
    ],
    providers: [AuthenticationService, UserService, ...authProviders, AnalyticsService, AnalyticsRepository],
    controllers: [AuthenticationController],
})
export class AuthenticationModule { }
