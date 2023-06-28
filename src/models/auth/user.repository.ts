// External libraries
import { Injectable, Inject } from '@nestjs/common';

// Constants
import { UpdateOptions } from "sequelize";

// Repository
import { BaseRepositoryORM, ModelType } from '../orm/model.repository-orm';

// Entities
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends BaseRepositoryORM<User> {
  constructor(@Inject(User) userModel: ModelType<User>) {
    super(userModel);
  }

  async updateUserTable(
    email: string,
    attributes: Partial<User>,
    { where, ...options }: UpdateOptions<User> = { where: {} }
  ) {
    const [, modules] = await this.module.update<User>(attributes, {
      ...options,
      returning: true,
      where: { email, ...where }
    });
    return modules;
  }
}
