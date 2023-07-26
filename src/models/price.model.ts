import { Schema, model, Document } from 'mongoose';

interface SprecialPrice extends Document{
  product_name: string;
  personal_price: number;
}
interface IPrice extends Document {
  user_id: string;
  brand: string;
  specialPrices: SprecialPrice[];
}



const priceSchema = new Schema<IPrice>({
  user_id: { type: String, required: true },
  brand: { type: String, required: true },
  specialPrices: [{
    product_name: { type: String, required: true },
    personal_price: { type: Number, required: true },
  }]
});

const Price = model<IPrice>('Price', priceSchema);

export default Price;
