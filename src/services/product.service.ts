import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';

const createProduct = async (product: Product): Promise<ProductSequelizeModel> => {
  const newProduct = await ProductModel.create(product);
  return newProduct;
};

const findAllProducts = async (): Promise<ProductSequelizeModel[]> => {
  const products = await ProductModel.findAll();
  return products;
};

export default { createProduct, findAllProducts };
