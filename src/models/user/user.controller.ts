import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RequestUser } from './user.interface';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/constants/roles';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Roles(Role.HOVA, Role.ADMIN, Role.KEVA)
  @Post('getPratimsByTzs')
  async getPratimsByTzs(@Req() req: RequestUser) {
    try {
      return await this.userService.getUsersDetailsByTz({ tzs: [req.user.tz] });
    } catch (err) {
      throw new UnauthorizedException({
        message: err.message,
        name: 'getUsersDetailsFaild',
      });
    }
  }
}
