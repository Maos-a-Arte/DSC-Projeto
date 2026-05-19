import { IsString, IsNotEmpty, IsNumber, IsPositive, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome do produto é obrigatório.' })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: 'A descrição do produto é obrigatória.' })
  description!: string;

  @IsNumber({}, { message: 'O preço deve ser um número válido.' })
  @IsPositive({ message: 'O preço deve ser maior que zero.' })
  price!: number;

  @IsNumber({}, { message: 'A quantidade em estoque deve ser um número.' })
  @Min(0, { message: 'O estoque não pode ser negativo.' })
  stock!: number;

  @IsString()
  @IsNotEmpty({ message: 'A categoria do produto é obrigatória.' })
  category!: string;
}