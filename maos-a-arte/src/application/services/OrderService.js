class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async confirmarPedido(id) {
        const pedido = await this.orderRepository.buscarPorId(id);
        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }

        // Regra do UC07: Status Aprovado e Cálculo do Split (15%)
        pedido.status = "CONFIRMADO";
        pedido.comissao_plataforma = pedido.total * 0.15;

        return await this.orderRepository.salvar(pedido);
    }
}

// O segredo está aqui: verifique se não há chaves { } no OrderService
module.exports = OrderService;