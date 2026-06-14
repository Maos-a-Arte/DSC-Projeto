import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products: any[] = [];

  async save(product: any): Promise<any> {
    this.products.push(product);
    return product;
  }
}