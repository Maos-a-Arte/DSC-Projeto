import { Controller, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service'; // Aponta para category.service.ts
import { CreateCategoryDto } from './create-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.create(createCategoryDto);
  }
}
