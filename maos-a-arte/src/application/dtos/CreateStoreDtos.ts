import { IsString, IsNotEmpty, IsEmail, Length, Matches } from 'class-validator';

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome da loja é obrigatório.' })
  @Length(3, 50, { message: 'O nome da loja deve ter entre 3 e 50 caracteres.' })
  storeName!: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome do artesão é obrigatório.' })
  artisanName!: string;

  @IsEmail({}, { message: 'O e-mail informado é inválido.' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'O CPF ou CNPJ é obrigatório.' })
  @Matches(/(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/, {
    message: 'O documento deve ser um CPF ou CNPJ válido.',
  })
  document!: string;
}