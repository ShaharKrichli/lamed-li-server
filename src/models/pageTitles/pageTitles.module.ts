import { Module } from '@nestjs/common';
import { PageTitlesService } from './pageTitles.service';
import { PageTitlesController } from './pageTitles.controller';
import { PageTitlesRepository } from './pageTitles.repository';
import { PageTitlesProviders } from './pageTitles.providers';

@Module({
  controllers: [PageTitlesController],
  providers: [PageTitlesRepository, PageTitlesService, ...PageTitlesProviders]
})
export class PageTitlesModule { }
