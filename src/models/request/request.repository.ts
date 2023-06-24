// Constraint
import { Request } from './entities/request.entity';

// External libraries
import { Injectable, Inject } from '@nestjs/common';

// Constants
import { REQUEST } from '../../common/constants';

// repositories
import { BaseRepositoryORM, ModelType } from '../orm/model.repository-orm';
import { execludeAllButDocs, repoExcludeRequests } from './blacklist/request.blacklist';
import { OpenTypeStatus } from './entities/openTypeStatus';
import { ReqDocs } from '../document/entities/reqDocs.entity';
import { DocData } from '../document/entities/docData.entity';

@Injectable()
export class RequestRepository extends BaseRepositoryORM<Request> {
  constructor(@Inject(REQUEST) requestModel: ModelType<Request>) {
    super(requestModel);
  }

  async findheaders() {
    return await this.module.findAll<Request>(
      {
        include: [{
          model: OpenTypeStatus,
        }],
        attributes: { exclude: repoExcludeRequests },
        where: { isDisplayAsRight: true }
      }
    );
  }

  async findDocumentsByReqId(id: number) {
    return await this.module.findOne<Request>(
      {
        include: [{
          model: ReqDocs,
          include: [DocData]
        }],
        attributes: { exclude: execludeAllButDocs },
        where: { id }
      }
    );
  }
}
