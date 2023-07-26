import { Schema, model, Document } from 'mongoose';

interface IPrice extends Document {
  user_id: string;
  brand: string;
  specialPrice: number;
}

const priceSchema = new Schema<IPrice>({
  user_id: { type: String, required: true },
  brand: { type: String, required: true },
  specialPrice: { type: Number, required: true },
});

const Price = model<IPrice>('Price', priceSchema);

export default Price;
