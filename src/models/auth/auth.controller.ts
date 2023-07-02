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
    return await this.authenticationService.login(authDto);
  }

  @Public()
  @Post('/forgot-password')
  async forgotPassword(@BodyDecoder() body: IEmail) {
    return await this.authenticationService.forgotPassword(body.email.toLowerCase());
  }

  @Roles(Role.AUTH_PROCESS)
  @Post('/restoration-code')
  async restorationCode(@BodyDecoder() body: ICode, @Req() req: RequestUser,) {
    return await this.authenticationService.restorationCode(body.code, req.user.email.toLowerCase());
  }

  @Roles(Role.RESET_PASSWORD)
  @Post('/reset-password')
  async resetPassword(@BodyDecoder() body: IPassword, @Req() req: RequestUser) {
    return await this.authenticationService.resetPassword(body.password, req.user.email.toLowerCase());
  }

  @UseGuards(RefreshTokenGuard)
  @Roles(Role.USER, Role.TEACHER)
  @Post('/refresh-token')
  async refreshToken(@BodyDecoder() body: IPassword, @Req() req: RequestUser) {
    return await this.authenticationService.resetPassword(body.password, req.user.email.toLowerCase());
  }

  @Roles(Role.USER, Role.TEACHER)
  @Get('/logout')
  async logout(@Req() req: RequestUser) {
    return await this.authenticationService.logout(req.user.email.toLowerCase());
  }


  @Public()
  @Post('/loginForTest')
  async shahar() {
    return this.authenticationService.ss();
  }
}
