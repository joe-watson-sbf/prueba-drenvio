import { Request, Response } from 'express';
import Product from '../models/product.model';

export async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await Product.find({ stock: { $gt: 0 } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
