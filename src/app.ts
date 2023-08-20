import express from 'express';
import productRoutes from './routes/product.route';
import ordersRoutes from './routes/orders.route';
import loginRoutes from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use('/orders', ordersRoutes);

app.use('/login', loginRoutes);

export default app;
