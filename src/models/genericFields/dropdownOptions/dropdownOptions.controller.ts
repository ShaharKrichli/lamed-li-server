import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { DropdownOptionsService } from './dropdownOptions.service';

import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/constants/roles';

@Controller('dropdownOptions')
export class DropdownOptionsController {
  constructor(private readonly dropdownOptionsService: DropdownOptionsService) { }

  @Get('/:id/text/:text')
  findDropdownOptions(@Param("id", new ParseIntPipe()) id: number, @Param("text") text: string) {
    return this.dropdownOptionsService.getOptionsByText(id, text)
  }

  @Get('/:id/code/:code')
  findOptionByCode(@Param("id", new ParseIntPipe()) id: number, @Param("code") code: string) {
    return this.dropdownOptionsService.getFieldOptionsByCode(id, code)
  }

}
