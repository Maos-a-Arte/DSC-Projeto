class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }

    async confirm(req, res) {
        try {
            const { id } = req.params;
            const pedidoConfirmado = await this.orderService.confirmarPedido(id);
            return res.status(200).json(pedidoConfirmado);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

module.exports = OrderController;