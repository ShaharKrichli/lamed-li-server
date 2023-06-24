import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Public()
  @Get('/all')
  async findAll() {
    return await this.categoryService.findAll();
  }

}