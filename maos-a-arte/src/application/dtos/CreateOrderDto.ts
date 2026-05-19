import { IsString, IsNotEmpty, IsArray, ValidateNested, IsNumber, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsString()
  @IsNotEmpty()
  productId!: string; // Adicionado o ! aqui

  @IsNumber()
  @IsPositive({ message: 'A quantidade de itens deve ser maior que zero.' })
  quantity!: number; // Adicionado o ! aqui
}

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty({ message: 'O ID do comprador é obrigatório.' })
  customerId!: string; // Adicionado o ! aqui

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items!: OrderItemDto[]; // Adicionado o ! aqui

  @IsNumber()
  @IsPositive({ message: 'O valor do frete deve ser positivo.' })
  shippingCost!: number; // Adicionado o ! aqui
}