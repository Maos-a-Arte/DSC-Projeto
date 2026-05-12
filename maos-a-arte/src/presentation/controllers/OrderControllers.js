class OrderController {
  constructor(orderService) {
    this.orderService = orderService;
  }

  // Mapeia o POST /api/v1/orders/:id/confirm
  async confirm(req, res) {
    const { id } = req.params;
    try {
      const pedidoConfirmado = await this.orderService.confirmarPedido(id);
      return res.status(200).json(pedidoConfirmado);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}