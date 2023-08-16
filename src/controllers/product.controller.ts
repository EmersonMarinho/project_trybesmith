import { Request, Response } from 'express';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const product = await productService.createProduct(req.body);
  return res.status(201).json(product);
};

const findAllProducts = async (req: Request, res: Response): Promise<Response> => {
  const products = await productService.findAllProducts();
  return res.status(200).json(products);
};

export default { createProduct, findAllProducts };