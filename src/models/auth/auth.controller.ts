// External Libraries
import { Controller, Post, Param, Req } from '@nestjs/common';

// Decorators
import { Public } from '../../common/decorators/public.decorator';

// Authentication
import { AuthenticationService } from './auth.service';
import { RequestUser } from 'src/common/interfaces/requestUser.interface';

@Controller('login')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) { }

  @Public()
  @Post('/')
  async login(@Req() req: RequestUser) {
    return this.authenticationService.login(req.user.tz);
  }

  @Public()
  @Post('/forgot-password')
  async forgotPassword(@Param("tz") tz: string) {

  }

  @Public()
  @Post('/restoration-code')
  async restorationCode(@Req() req: RequestUser) {
    return this.authenticationService.login(req.user.tz);
  }

  @Public()
  @Post('/reset-password')
  async resetPassword(@Req() req: RequestUser) {
    return this.authenticationService.login(req.user.tz);
  }
}
