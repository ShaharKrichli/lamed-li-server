// External Libraries
import { Controller, Post, Param, Req } from '@nestjs/common';

// Decorators
import { Public } from '../../common/decorators/public.decorator';

// Authentication
import { AuthenticationService } from './auth.service';
import { RequestUser } from 'src/common/interfaces/requestUser.interface';
import { BodyDecoder } from 'src/common/decorators/bodyDecoder';
import { ICode, ILogin, IPassword } from './interfaces/IAuth';

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

  @Public()
  @Post('/restoration-code')
  async restorationCode(@BodyDecoder() body: ICode) {
    return this.authenticationService.restorationCode(body.code);
  }

  @Public()
  @Post('/reset-password')
  async resetPassword(@BodyDecoder() body: IPassword) {
    return this.authenticationService.resetPassword(body.password);
  }
}
