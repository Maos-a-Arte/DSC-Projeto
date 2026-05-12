class Product {
  constructor(id, name, description, price, weight, dimensions, artisanId) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.weight = weight;
    this.dimensions = dimensions; // Ex: { l: 10, a: 20, p: 30 }
    this.artisanId = artisanId;
    this.createdAt = new Date();
  }

  // Regra de Negócio: Validação de dimensões para Frete
  isValidForShipping() {
    return this.weight > 0 && this.dimensions.a > 0;
  }
}

module.exports = Product;