import express from 'express';
import userRoutes from './routes/userRoute.js';
import orderRoutes from './routes/orderRoute.js';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', orderRoutes);

app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});


export default app;