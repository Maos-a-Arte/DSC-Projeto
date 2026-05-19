import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryRepository {
  private categories: any[] = [];

  async save(category: any): Promise<any> {
    this.categories.push(category);
    return category;
  }
}
