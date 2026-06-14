import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './create-product.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(dto: CreateProductDto) {
    const newProduct = {
      id: randomUUID(),
      name: dto.name,
      description: dto.description,
      price: dto.price,
      partnerId: dto.partnerId,
      status: 'available', // Status exigido na pág 4 do manual
    };

    return await this.productRepository.save(newProduct);
  }
}