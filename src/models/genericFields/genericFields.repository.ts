// Constraint
import { GenericFields } from './entities/genericFields.entity';

// External libraries
import { Injectable, Inject } from '@nestjs/common';

// Constants
import { FIELDS } from '../../common/constants';

// Repository
import { BaseRepositoryORM, ModelType } from '../orm/model.repository-orm';

@Injectable()
export class GenericFieldsRepository extends BaseRepositoryORM<GenericFields> {
    constructor(@Inject(FIELDS) genericFieldsModel: ModelType<GenericFields>) {
        super(genericFieldsModel);
    }
}
