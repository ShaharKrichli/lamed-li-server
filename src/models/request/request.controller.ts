import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ModelOmit } from '../orm/model.repository-orm';

//services
import { RequestService } from './request.service';

//entities
import { Request } from './entities/request.entity';

//blacklist
import { ExcludeRequests } from './blacklist/request.blacklist';

//commons
import { Role } from 'src/common/constants/roles';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) { }

  @Roles(Role.HOVA, Role.ADMIN)
  @Get('/supported')
  findSupported() {
    return this.requestService.findSupported()
  }

  @Roles(Role.HOVA, Role.ADMIN)
  @Get('/documents/:id')
  findDocumentsByReqId(@Param("id", new ParseIntPipe()) id: number) {
    return this.requestService.findDocumentsByReqId(id);
  }

  @Roles(Role.HOVA, Role.ADMIN)
  @Get('/match')
  findNeedMatchReqs() {
    return this.requestService.findMatch();
  }


  @Public()
  @Get('/headers')
  async findHeaders() {
    return await this.requestService.findHeaders();

  }

  @Public()
  @Get('/:id')
  findOne(@Param("id", new ParseIntPipe()) id: number) {
    return this.requestService.findOne(id);
  }

  @Get('exclude/:id')
  findExcludeOne(@Param("id", new ParseIntPipe()) id: number): Promise<ModelOmit<Request, ExcludeRequests>> {
    return this.requestService.findExcludeOne(id);
  }

  @Public()
  @Get('/catId/:id')
  findOneCatId(@Param("id", new ParseIntPipe()) id: number) {
    return this.requestService.findOneCatId(id);
  }
}
