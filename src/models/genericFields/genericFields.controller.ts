import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

//services
import { GenericFieldsService } from './genericFields.service';

//commons
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/constants/roles';

@Roles(Role.HOVA,Role.ADMIN)
@Controller('reqFields')
export class GenericFieldsController {
  constructor(private readonly genericRequestFieldsService: GenericFieldsService) { }

  @Get('/:subType')
  findFieldsByIT(@Param("subType", new ParseIntPipe()) subType: number) {
    return this.genericRequestFieldsService.findFieldsByID(subType);
  }

}
