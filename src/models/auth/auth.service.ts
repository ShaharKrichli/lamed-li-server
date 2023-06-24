// External Libraries
import { BadRequestException, Injectable } from '@nestjs/common';
import { config } from 'dotenv';

// Interfaces
import { IToken } from './interfaces/IToken';

// services
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/common/constants/roles';
import { isDatePast, stringToMoment } from 'src/utilities/dates/dates';
import { trackEvent, trackException } from 'src/utilities/logs';

import { v4 as uuidv4 } from 'uuid';
import { AnalyticsService } from '../analytics/analytics.service';
import { HOVA_CODE } from 'src/common/constants/global';
import { Analytics } from '../analytics/entites/analytics.entity';

config();
@Injectable()
export class AuthenticationService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private analyticsService: AnalyticsService
    ) { }

    async login(userTz: string): Promise<IToken> {
        try {
            let [user] = await this.userService.getUsersDetailsByTzForServer({ tzs: [userTz] })
            let roles: Role[] = []
            if (user) {
                user?.service_type.code === HOVA_CODE ? roles.push(Role.HOVA) : roles.push(Role.KEVA)
                user?.tashBenefits?.forEach(element => {
                    if (element?.tashBenefit?.code === '02' && !isDatePast(stringToMoment(element.endDateBenefit))) {
                        roles.push(Role.BODED)
                        return
                    }
                })
            }
            let analyticsObj = await this.analyticsService.retrieveAnalyticsId(user?._id)
            if (!analyticsObj) {
                analyticsObj = new Analytics()
                analyticsObj.analyticsId = uuidv4()
                await this.analyticsService.newAnalyticsId(analyticsObj.analyticsId, user?._id)
            }
            trackEvent('UserLogin', { login: 'Successfull', msg: `User successfully login and got token.`, analyticsId: analyticsObj.analyticsId })
            return {
                accessToken: this.jwtService.sign({ tz: userTz, pernr: user?._id, roles, analyticsId: analyticsObj.analyticsId }),
            };
        }
        catch (error) {
            throw new BadRequestException({ message: error.message, name: 'UserFailedToLoginServer', userTz })

        }
    }
}
