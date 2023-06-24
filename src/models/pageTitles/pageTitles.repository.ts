// Constraint
import { PageTitles } from './entities/pageTitles.entity';

// External libraries
import { Injectable, Inject } from '@nestjs/common';


// Repository
import { BaseRepositoryORM, ModelType } from 'src/models/orm/model.repository-orm';
import { PAGE_TITLES } from 'src/common/constants';

@Injectable()
export class PageTitlesRepository extends BaseRepositoryORM<PageTitles> {
    constructor(@Inject(PAGE_TITLES) pageTitleModel: ModelType<PageTitles>) {
        super(pageTitleModel);
    }
}
