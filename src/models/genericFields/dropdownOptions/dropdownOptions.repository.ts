// Constraint
import { DropdownOptions } from './entities/dropdownOptions.entity'; 

// External libraries
import { Injectable, Inject } from '@nestjs/common';

// Repository
import { BaseRepositoryORM, ModelType } from '../../orm/model.repository-orm';

@Injectable()
export class DropdownOptionsRepository extends BaseRepositoryORM<DropdownOptions> {
    constructor(@Inject(DropdownOptions) dropdownOptionsModel: ModelType<DropdownOptions>) {
        super(dropdownOptionsModel);
    }

    async findFieldOptionByCode(id: number, code: string) {
        return await this.module.findOne<DropdownOptions>(
          {
            where: { id, code }
          }
        );
      }
}
