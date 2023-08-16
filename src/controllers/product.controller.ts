import { Request, Response } from 'express';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const product = await productService.createProduct(req.body);
  return res.status(201).json(product);
};

export default { createProduct };