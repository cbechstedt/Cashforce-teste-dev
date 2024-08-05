import express from 'express';
import userRoutes from './routes/userRoute.js';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});


export default app;