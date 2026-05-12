class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async handleCreate(req, res) {
    try {
      const product = await this.productService.createProduct(req.body);
      return res.status(201).json({
        message: "Produto cadastrado com sucesso!",
        data: product
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ProductController;