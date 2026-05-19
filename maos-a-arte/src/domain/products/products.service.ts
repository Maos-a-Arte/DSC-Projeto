import { randomUUID } from 'crypto';

export class ProductsService {
  async create(productData: { name: string; description: string; price: number; partnerId: string }) {
    // Retorna o mínimo necessário com os campos validados pelo teste
    return {
      id: randomUUID(), // Gera o ID automaticamente
      name: productData.name,
      description: productData.description,
      price: productData.price,
      partnerId: productData.partnerId,
      status: 'available' // Status inicial obrigatório
    };
  }
}