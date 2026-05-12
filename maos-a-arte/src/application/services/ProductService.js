const Product = require('../../domain/entities/Product');

class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async createProduct(data) {
    // Instancia a entidade para garantir as regras de domínio
    const newProduct = new Product(
      null, 
      data.name, 
      data.description, 
      data.price, 
      data.weight, 
      data.dimensions, 
      data.artisanId
    );

    if (!newProduct.isValidForShipping()) {
      throw new Error("Dados de logística inválidos para cálculo de frete.");
    }

    return await this.productRepository.save(newProduct);
  }
}

module.exports = ProductService;