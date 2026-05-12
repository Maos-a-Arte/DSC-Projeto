const { AppDataSource } = require('../../data-source');
// Se o seu modelo de pedido se chamar OrderEntity, ajuste o nome abaixo
const Order = require('../../domain/entities/Order'); 

class TypeORMOrderRepository {
    constructor() {
        this.repository = AppDataSource.getRepository(Order);
    }

    async buscarPorId(id) {
        // Busca o pedido no banco de dados
        return await this.repository.findOne({ where: { id: parseInt(id) } });
    }

    async salvar(pedido) {
        // Salva as alterações (como o status CONFIRMADO) no banco
        return await this.repository.save(pedido);
    }
}

module.exports = TypeORMOrderRepository;