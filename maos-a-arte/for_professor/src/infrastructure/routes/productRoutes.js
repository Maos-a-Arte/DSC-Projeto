const express = require('express');
const router = express.Router();
const ProductController = require('../../presentation/controllers/ProductController');
const ProductService = require('../../application/services/ProductService');

// Simulação de repositório em memória para permitir teste de GET /products
const mockRepo = {
  items: [],
  save: async (product) => {
    const saved = { ...product, id: Math.random() };
    mockRepo.items.push(saved);
    return saved;
  },
  findAll: async () => mockRepo.items,
};

const service = new ProductService(mockRepo);
const controller = new ProductController(service);

// Endpoint conforme definido no seu documento UC_003
router.post('/', (req, res) => controller.handleCreate(req, res));
router.get('/', (req, res) => controller.handleGetAll(req, res));

module.exports = router;
