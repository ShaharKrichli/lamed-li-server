// External Libraries
import { Controller, Post, Param, Req } from '@nestjs/common';

// Decorators
import { Public } from '../../common/decorators/public.decorator';

// Authentication
import { AuthenticationService } from './auth.service';
import { RequestUser } from 'src/common/interfaces/requestUser.interface';
import { BodyDecoder } from 'src/common/decorators/bodyDecoder';
import { ICode, ILogin, IPassword } from './interfaces/IAuth';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/constants/roles';

@Controller('login')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) { }

  @Public()
  @Post('/')
  async login(@BodyDecoder() body: ILogin) {
    return this.authenticationService.login(body.email, body.password);
  }

  @Public()
  @Post('/forgot-password')
  async forgotPassword(@BodyDecoder() body: IPassword) {
    return this.authenticationService.forgotPassword(body.password);
  }

  @Roles(Role.AUTH_PROCESS)
  @Post('/restoration-code')
  async restorationCode(@BodyDecoder() body: ICode, @Req() req: RequestUser,) {
    return this.authenticationService.restorationCode(body.code,req.user.email);
  }

  @Public()
  @Post('/reset-password')
  async resetPassword(@BodyDecoder() body: IPassword) {
    return this.authenticationService.resetPassword(body.password);
  }
}
