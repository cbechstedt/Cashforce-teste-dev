import Order from '../model/Order.js';
import Buyer from '../model/Buyer.js';
import Provider from '../model/Provider.js';
import Cnpj from '../model/Cnpj.js';

class OrderService {
  async getAllOrders() {
    const orders = await Order.findAll({
      include: [
        { model: Buyer, as: 'buyer' }, 
        { model: Provider, as: 'provider' }, 
        { model: Cnpj, as: 'cnpj' }
      ]
    });

    return orders.map(order => ({
      notaFiscal: order.nNf,
      sacado: order.buyer.name,
      cedente: order.provider.name,
      emissao: order.emissionDate,
      valor: order.value,
      status: this.getStatusDescription(order.orderStatusBuyer)
    }));
  }

  getStatusDescription(status) {
    const statusDescriptions = [
      'Pendente de confirmação', 
      'Pedido confirmado', 
      'Não reconhece o pedido', 
      'Mercadoria não recebida', 
      'Recebida com avaria', 
      'Devolvida', 
      'Recebida com devolução parcial', 
      'Recebida e confirmada', 
      'Pagamento Autorizado'
    ];
    return statusDescriptions[status] || 'Status desconhecido';
  }
}

export default new OrderService();
