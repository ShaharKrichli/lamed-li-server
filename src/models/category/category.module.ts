import { Module } from '@nestjs/common';

import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { categoryProviders } from './category.providers';
import { RequestService } from '../request/request.service';
import { RequestRepository } from '../request/request.repository';

@Module({
  controllers: [CategoryController],
  providers: [CategoryRepository, CategoryService, ...categoryProviders,RequestService,RequestRepository],
})
export class CategoryModule {}
