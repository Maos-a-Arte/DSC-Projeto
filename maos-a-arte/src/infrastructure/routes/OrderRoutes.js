const express = require('express');
const router = express.Router();
const OrderController = require('../../presentation/controllers/OrderController');
const OrderService = require('../../application/services/OrderService');
const TypeORMOrderRepository = require('../repositories/TypeORMOrderRepository');

// Injeção de Dependências Manual (Conforme seu print)
const repository = new TypeORMOrderRepository();
const service = new OrderService(repository);
const controller = new OrderController(service);

// Rota oficial do UC07: Confirmar Pedido
router.post('/:id/confirm', (req, res) => controller.confirm(req, res));

module.exports = router;