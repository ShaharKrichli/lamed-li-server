import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { RequestRepository } from './request.repository'
import { RequestProviders } from './request.providers';

@Module({
  controllers: [RequestController],
  providers: [RequestRepository, RequestService, ...RequestProviders]
})
export class RequestModule { }
