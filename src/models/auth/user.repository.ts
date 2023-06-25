// External libraries
import { Injectable, Inject } from '@nestjs/common';

// Constants
import { FIELDS, USER } from '../../common/constants/providers';

// Repository
import { BaseRepositoryORM, ModelType } from '../orm/model.repository-orm';

// Entities
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends BaseRepositoryORM<User> {
    constructor(@Inject(USER) userModel: ModelType<User>) {
        super(userModel);
    }
}
