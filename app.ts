import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import productRoutes from './src/routes/product.router';
import priceRoutes from './src/routes/price.router';
import { configDotenv } from 'dotenv';

const app: Application = express();

configDotenv();

// Connect to the database
const MONGO_URI: string = process.env.MONGO_URI || '';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Database connection error:', err));

// Middleware
app.use(express.json());

// Routes
app.use(productRoutes);
app.use(priceRoutes);

// 404 Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: 'Route not found' });
});

export default app;
