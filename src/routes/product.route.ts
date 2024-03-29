import express from 'express';
import productController from '../controllers/product.controller';

const router = express.Router();

router.post('/', productController.createProduct);

router.get('/', productController.findAllProducts);

export default router;
