// Decorators
import { Public } from './common/decorators/public.decorator';

// External libraries
import { Response } from 'express';
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

@Public()
@Controller()
export class AppController {
  @Get()
  getOK(@Res() res: Response) {
    res.status(HttpStatus.OK).send('Lamed li service is up and running!');
  }
}
