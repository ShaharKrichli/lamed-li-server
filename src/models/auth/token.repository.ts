// External libraries
import { Injectable, Inject } from '@nestjs/common';

// Constants
import { TOKEN } from '../../common/constants/providers';

// Repository
import { BaseRepositoryORM, ModelType } from '../orm/model.repository-orm';

// Entities
import { Tokens } from './entities/token.entity';

@Injectable()
export class TokenRepository extends BaseRepositoryORM<Tokens> {
    constructor(@Inject(TOKEN) tokenModel: ModelType<Tokens>) {
        super(tokenModel);
    }
}
