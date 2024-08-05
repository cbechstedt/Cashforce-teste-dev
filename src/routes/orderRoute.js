import express from 'express';
import OrderController from '../controller/OrderController.js';

const router = express.Router();

router.get('/', OrderController.getAllOrders);

export default router;