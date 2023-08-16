import express from 'express';
import productRoutes from './routes/product.route';
import ordersRoutes from './routes/orders.route';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use('/orders', ordersRoutes);

export default app;
