import { Module } from '@nestjs/common';
import { GenericFieldsService } from './genericFields.service';
import { GenericFieldsController } from './genericFields.controller';
import { GenericFieldsRepository } from './genericFields.repository';
import { genericFieldsProviders } from './genericFields.providers';
import { PageTitlesRepository } from '../pageTitles/pageTitles.repository';
import { PageTitlesService } from '../pageTitles/pageTitles.service';

@Module({
  controllers: [GenericFieldsController],
  providers: [GenericFieldsRepository, GenericFieldsService, ...genericFieldsProviders,PageTitlesRepository,PageTitlesService]
})
export class GenericFieldsModule { }