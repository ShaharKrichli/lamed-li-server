// External Libraries
import { Controller, Post, Req, UseGuards, Get, Body } from '@nestjs/common';
import { BodyDecoder } from 'src/common/decorators/bodyDecoder';

// Decorators
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';

// services
import { AuthenticationService } from './auth.service';

// interfaces
import { RequestUser } from 'src/common/interfaces/requestUser.interface';

// consts
import { Role } from 'src/common/constants/roles';

// guard
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';

// dto
import { AuthDto, CodeDto, PasswordDto } from './dto/auth.dto';

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
  async forgotPassword(@BodyDecoder() authDto:AuthDto) {
    return await this.authenticationService.forgotPassword(authDto);
  }

  @Roles(Role.AUTH_PROCESS)
  @Post('/restoration-code')
  async restorationCode(@BodyDecoder() codeDto:CodeDto, @Req() authDto:AuthDto,) {
    return await this.authenticationService.restorationCode(codeDto,authDto );
  }

  @Roles(Role.RESET_PASSWORD)
  @Post('/reset-password')
  async resetPassword(@BodyDecoder() passwordDto:PasswordDto, @Req() authDto:AuthDto) {
    return await this.authenticationService.resetPassword(passwordDto, authDto);
  }

  @UseGuards(RefreshTokenGuard)
  @Roles(Role.USER, Role.TEACHER)
  @Post('/refresh-token')
  async refreshToken(@BodyDecoder() passwordDto:PasswordDto, @Req() authDto:AuthDto) {
    return await this.authenticationService.resetPassword(passwordDto, authDto);
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
