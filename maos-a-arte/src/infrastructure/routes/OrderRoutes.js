const path = require('path'); // Faltava esta linha!
const express = require('express');
const router = express.Router();

// Importações usando o path
const OrderController = require(path.join(__dirname, '../../presentation/controllers/OrderController'));
const OrderService = require(path.join(__dirname, '../../application/services/OrderService'));
const TypeORMOrderRepository = require(path.join(__dirname, '../repositories/TypeORMOrderRepository'));

// Injeção de dependências
const repository = new TypeORMOrderRepository();
const service = new OrderService(repository);
const controller = new OrderController(service);

// Rota
router.post('/:id/confirm', (req, res) => controller.confirm(req, res));

module.exports = router;