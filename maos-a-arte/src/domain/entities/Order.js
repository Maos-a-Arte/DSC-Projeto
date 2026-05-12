class Order {
  constructor({ id, clienteId, total, status, itens = [] }) {
    this.id = id;
    this.clienteId = clienteId;
    this.total = total;
    this.status = status || 'PENDENTE';
    this.itens = itens;
    this.comissaoPlataforma = 0;
    this.valorArtesao = 0;
  }

  // Regra de Negócio: Cálculo do Split (15%)
  calcularSplit() {
    this.comissaoPlataforma = this.total * 0.15;
    this.valorArtesao = this.total - this.comissaoPlataforma;
  }

  podeConfirmar(pagamentoStatus) {
    return pagamentoStatus === 'APROVADO';
  }
}

module.exports = Order;