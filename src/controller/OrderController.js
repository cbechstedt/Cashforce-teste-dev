import OrderService from "../service/OrderService.js";

class OrderController {
  async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new OrderController();
