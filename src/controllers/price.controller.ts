import { Request, Response } from 'express';
import Price from '../models/price.model';
import Product from '../models/product.model';

export const getProductSpecialPrice = async (req: Request, res: Response) => {
  const { user_id, nombre_producto } = req.params;

  try {
    const product = await Product.findOne({ name: nombre_producto, stock: { $gt: 0 } });
    if (!product) {
      return res.status(404).json({ error: 'Product not found or out of stock' });
    }

    const price = await Price.findOne({ user_id, brand: product.brand });
    const finalPrice = price ? price.specialPrice : product.basePrice;
    res.json({ product: product.name, price: finalPrice });

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
