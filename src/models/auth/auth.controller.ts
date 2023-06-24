// External Libraries
import { Controller, Post, Param, Req } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import envVar from 'src/utilities/env-var';

// Decorators
import { Public } from '../../common/decorators/public.decorator';
import { RequestUser } from '../user/user.interface';

// Authentication
import { AuthenticationService } from './auth.service';

@Controller('login')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) { }

  @Public()
  @Post('/auth')
  async login(@Req() req: RequestUser) {
    return this.authenticationService.login(req.user.tz);
  }

  @Public()
  @Post('/automation/:tz')
  async automationLogin(@Param("tz") tz: string) {
    if (["TEST", "DEV"].includes(envVar.NODE_ENV!)) {
      return this.authenticationService.login(tz);
    }
    throw new UnauthorizedException({ message: `unauthorized access from automation login on ${envVar.NODE_ENV}`, name: 'automationLoginError' });

  }
}
