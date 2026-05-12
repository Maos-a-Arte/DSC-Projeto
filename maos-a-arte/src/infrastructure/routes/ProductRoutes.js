const express = require('express');
const router = express.Router();
const ProductController = require('../../presentation/controllers/ProductController');
const ProductService = require('../../application/services/ProductService');

// Simulação de Repositório (Persistência)
const mockRepo = { save: async (p) => ({ ...p, id: Math.random() }) };

const service = new ProductService(mockRepo);
const controller = new ProductController(service);

// Endpoint conforme definido no seu documento UC_003
router.post('/', (req, res) => controller.handleCreate(req, res));

module.exports = router;