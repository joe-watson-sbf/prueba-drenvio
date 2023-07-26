import { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
  name: string;
  brand: string;
  stock: number;
  basePrice: number;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  stock: { type: Number, required: true },
  basePrice: { type: Number, required: true },
});

const Product = model<IProduct>('Product', productSchema);

export default Product;
