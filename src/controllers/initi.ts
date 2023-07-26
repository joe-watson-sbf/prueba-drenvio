import { Request, Response } from 'express';
import Product from '../models/product.model';
import Price from '../models/price.model';
const productList = [
    new Product({
      name: 'T-Shirt',
      brand: 'Adidas',
      stock: 20,
      basePrice: 200
    }),
    new Product({
      name: 'Shorts',
      brand: 'Puma',
      stock: 5,
      basePrice: 500
    }),
    new Product({
      name: 'Shirt',
      brand: 'Umbro',
      stock: 0,
      basePrice: 500
    }),
    new Product({
      name: 'Sneakers',
      brand: 'Fila',
      stock: 25,
      basePrice: 500
    }),
  ]

  const listSpecialPrice = [
    new Price({
      user_id: '1',
      brand: 'Adidas',
      specialPrice: 150
    }),
    new Price({
      user_id: '3',
      brand: 'Fila',
      specialPrice: 250
    }),
    new Price({
      user_id: '2',
      brand: 'Puma',
      specialPrice: 200
    }),
  ]



export async function initProducts(req: Request, res: Response) {
  // add if not exists products in db
  const count = await Product.count();

  if (count > 0) {
    return res.status(409).json({ message: 'Products already exists' });
  }

  try {
    await Product.insertMany(productList);
    await Price.insertMany(listSpecialPrice);
    res.status(201).json({ message: 'Products created' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
