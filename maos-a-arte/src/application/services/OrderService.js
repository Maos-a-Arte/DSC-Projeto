class OrderService {
  constructor(orderRepository, paymentRepository) {
    this.orderRepository = orderRepository;
    this.paymentRepository = paymentRepository;
  }

  async confirmarPedido(pedidoId) {
    // 1. Procura o pedido
    const pedido = await this.orderRepository.findById(pedidoId);
    if (!pedido) throw new Error("Pedido não encontrado.");

    // 2. Verifica se o pagamento foi aprovado (Regra do UC07)
    const pagamento = await this.paymentRepository.findByPedidoId(pedidoId);
    if (!pagamento || pagamento.status !== 'APROVADO') {
      throw new Error("Não é possível confirmar: Pagamento pendente ou rejeitado.");
    }

    // 3. Executa o Split e muda o status
    pedido.status = 'CONFIRMADO';
    pedido.calcularSplit(); // Regra de domínio dos 15%

    return await this.orderRepository.update(pedido);
  }
}