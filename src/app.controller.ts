// Decorators
import { Public } from './common/decorators/public.decorator';

// External libraries
import { Response } from 'express';
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

// nodemailer
import { sendEmail } from './utilities/nodemailer/nodemailer';
import { mailType } from './utilities/nodemailer/nodemailerConst';

@Public()
@Controller()
export class AppController {
  @Get()
  getOK(@Res() res: Response) {
    res.status(HttpStatus.OK).send('Lamed li service is up and running!');
  }

  // TODO: delete this nodemailer test. both of them.
  @Get('/sendEmail')
  sendEmail(@Res() res: Response) {
    res.status(HttpStatus.OK).send(sendEmail({mailType: mailType.FORGET_PASSWORD, userEmail: 'shimon.chay.s@gmail.com', param1: 'shimi', param2: '4994903'}));
  }

  @Get('/sendEmailAfter')
  sendEmailAfter(@Res() res: Response) {
    res.status(HttpStatus.OK).send(sendEmail({mailType: mailType.RESET_SUCCESS, userEmail: 'shimon.chay.s@gmail.c', param1: '433354'}));
  }
}
