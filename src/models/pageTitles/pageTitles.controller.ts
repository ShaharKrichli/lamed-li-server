import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Role } from 'src/common/constants/roles';
import { Roles } from 'src/common/decorators/roles.decorator';
import { PageTitlesService } from './pageTitles.service';

@Controller('pageTitles')
export class PageTitlesController {
  constructor(private readonly genericRequestPageTitlesService: PageTitlesService) { }

  @Roles(Role.HOVA,Role.ADMIN)
  @Get('/:id')
  findPageTitlesById(@Param("id", new ParseIntPipe()) id: number) {
    return this.genericRequestPageTitlesService.findPageTitlesByID(id);
  }

}
