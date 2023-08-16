import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

type OrderWithProducts = {
  id: number;
  userId: number;
  productIds?: number[];
};

const getAllOrders = async (): Promise<OrderWithProducts[]> => {
  const orders = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
    }],
  });

  const ordersWithProducts = orders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((product) => product.id),
  }));

  return ordersWithProducts;
};

export default { getAllOrders };
