import { Request, Response } from 'express';
import orderService from '../services/orders.service';

const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  const orders = await orderService.getAllOrders();
  return res.status(200).json(orders);
};

export default { getAllOrders };