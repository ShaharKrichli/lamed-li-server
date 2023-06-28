// External Libraries
import { Controller, Post, Param, Req, UseGuards, Get } from '@nestjs/common';

// Decorators
import { Public } from '../../common/decorators/public.decorator';

// Authentication
import { AuthenticationService } from './auth.service';
import { RequestUser } from 'src/common/interfaces/requestUser.interface';
import { BodyDecoder } from 'src/common/decorators/bodyDecoder';
import { ICode, IEmail, ILogin, IPassword } from './interfaces/IAuth';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/constants/roles';
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';

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
  async forgotPassword(@BodyDecoder() body: IEmail) {
    return this.authenticationService.forgotPassword(body.email);
  }

  @Roles(Role.AUTH_PROCESS)
  @Post('/restoration-code')
  async restorationCode(@BodyDecoder() body: ICode, @Req() req: RequestUser,) {
    return this.authenticationService.restorationCode(body.code, req.user.email);
  }

  @Roles(Role.RESET_PASSWORD)
  @Post('/reset-password')
  async resetPassword(@BodyDecoder() body: IPassword, @Req() req: RequestUser) {
    return this.authenticationService.resetPassword(body.password, req.user.email);
  }

  @UseGuards(RefreshTokenGuard)
  @Public()
  @Post('/refresh-token')
  async refreshToken(@BodyDecoder() body: IPassword, @Req() req: RequestUser) {
    return this.authenticationService.resetPassword(body.password, req.user.email);
  }

  @Roles(Role.USER, Role.TEACHER)
  @Get('logout')
  logout(@Req() req: RequestUser) {
    this.authenticationService.logout(req.user.email);
  }
}
