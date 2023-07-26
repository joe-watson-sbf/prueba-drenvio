import { Router } from 'express';
import { getAllProducts } from '../controllers/product.controller';
import { initProducts } from '../controllers/initi';

const router = Router();

router.post('/products', initProducts);

router.get('/products', getAllProducts);

export default router;
