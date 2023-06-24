import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CategoryRepository } from './category.repository';
import { RequestService } from '../request/request.service';

@Injectable()
export class CategoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly requestService: RequestService,
  ) {}

  async findAll() {
    const findAllCategories = async () => {
      return await this.categoryRepository.all<undefined, Category>();
    };

    const findReqHeaders = async () => {
      return await this.requestService.findHeaders();
    };

    return await Promise.all([findAllCategories(), findReqHeaders()]).then(
      ([categories, reqHeaders]) => {
        if (!categories.length)
          throw new NotFoundException({
            message: 'categories not found',
            name: 'Categories data did not return',
          });
        if (!reqHeaders.length)
          throw new NotFoundException({
            message: 'reqHeaders not found',
            name: 'reqHeadersNotFound',
          });
        return { categories, reqHeaders };
      },
    );
  }
}
