const { EntitySchema } = require("typeorm");

class Order {
  constructor(id, total, status, comissaoPlataforma) {
    this.id = id;
    this.total = total;
    this.status = status || 'PENDENTE';
    this.comissaoPlataforma = comissaoPlataforma || 0;
  }

  // Sua regra de negócio mantida
  calcularSplit() {
    this.comissaoPlataforma = this.total * 0.15;
    this.valorArtesao = this.total - this.comissaoPlataforma;
  }
}

module.exports = new EntitySchema({
  name: "Order",
  target: Order, // Vincula a classe acima ao esquema do banco
  tableName: "orders",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    total: {
      type: "decimal",
      precision: 10,
      scale: 2,
    },
    status: {
      type: "varchar",
      length: 20,
    },
    comissaoPlataforma: {
      name: "comissao_plataforma", // Nome exato da coluna no seu SQL do Docker
      type: "decimal",
      precision: 10,
      scale: 2,
      default: 0,
    },
  },
});