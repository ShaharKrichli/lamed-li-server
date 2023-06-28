// External Libraries
import { Controller, Post, Req, UseGuards, Get } from '@nestjs/common';
import { BodyDecoder } from 'src/common/decorators/bodyDecoder';

// Decorators
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';

// services
import { AuthenticationService } from './auth.service';

// interfaces
import { RequestUser } from 'src/common/interfaces/requestUser.interface';
import { ICode, IEmail, IPassword } from './interfaces/IAuth';

// consts
import { Role } from 'src/common/constants/roles';

// guard
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';

// dto
import { AuthDto } from './dto/auth.dto';

@Controller('login')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) { }

  @Public()
  @Post('/')
  async login(@BodyDecoder() authDto: AuthDto) {
    return this.authenticationService.login(authDto);
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
