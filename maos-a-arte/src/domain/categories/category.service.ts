import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './create-category.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(dto: CreateCategoryDto) {
    const newCategory = {
      id: randomUUID(),
      name: dto.name,
      description: dto.description ?? null,
    };

    return await this.categoryRepository.save(newCategory);
  }
}
