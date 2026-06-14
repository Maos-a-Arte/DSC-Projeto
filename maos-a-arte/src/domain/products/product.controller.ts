import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service'; // Aponta para product.service.ts
import { CreateProductDto } from './create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }
}