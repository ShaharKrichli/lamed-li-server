// Constraint
import { Category } from './entities/category.entity';

// External libraries
import { Injectable, Inject } from '@nestjs/common';

// Constants
import { CATEGORY } from '../../common/constants';

// Repository
import { BaseRepositoryORM, ModelType } from '../orm/model.repository-orm';

@Injectable()
export class CategoryRepository extends BaseRepositoryORM<Category> {
  constructor(@Inject(CATEGORY) categoryModel: ModelType<Category>) {
    super(categoryModel);
  }

}
