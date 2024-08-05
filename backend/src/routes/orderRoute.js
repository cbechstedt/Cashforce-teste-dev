import express from 'express';
import OrderController from '../controller/OrderController.js';

const router = express.Router();

router.get('/orders', OrderController.getAllOrders);

export default router;