import { Router } from 'express';
import { getProductSpecialPrice } from '../controllers/price.controller';

const router = Router();

router.get('/price/:user_id/:nombre_producto', getProductSpecialPrice);

export default router;
