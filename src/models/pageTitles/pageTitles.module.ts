import { Module } from '@nestjs/common';
import { PageTitlesService } from './pageTitles.service';
import { PageTitlesRepository } from './pageTitles.repository';
import { PageTitlesProviders } from './pageTitles.providers';

@Module({
  providers: [PageTitlesRepository, PageTitlesService, ...PageTitlesProviders]
})
export class PageTitlesModule { }
