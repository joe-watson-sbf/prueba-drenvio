import { Request, Response } from 'express';
import Price from '../models/price.model';
import Product from '../models/product.model';

const getSpecialPriceDetails = async (user_id: string, product_name: string): Promise<any> => {
  if (!user_id || !product_name) {
    throw new Error('Missing params! (user_id, product_name)');
  }

  const priceFound = await Price.findOne({ user_id });

  if (!priceFound) {
    return null;
  }

  return priceFound.specialPrices.filter((p) => p.product_name.toLowerCase() === product_name.toLocaleLowerCase())[0];
};


export const getProductSpecialPrice = async (req: Request, res: Response) => {
  const { user_id, nombre_producto } = req.params;

  try {
    const productDetails = await getSpecialPriceDetails(user_id, nombre_producto);
    const product = await Product.findOne({ name: nombre_producto, stock: { $gt: 0 } });
    if (!product) {
      return res.status(404).json({ error: 'Product not found!' });
    }

    if (product.stock === 0) {
      return res.status(404).json({ error: 'Product out of stock' });
    }

    if (!productDetails) {
      return res.status(404).json({ product: product.name, price: product.basePrice });
    }

    const finalPrice = productDetails.personal_price;
    res.json({ product: product.name, price: finalPrice });

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
