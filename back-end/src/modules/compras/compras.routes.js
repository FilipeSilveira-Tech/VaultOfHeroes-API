import { Router } from 'express';
const router = Router();

// --- CONTROLLERS ---
import { buyItem } from './compras.controller.js';

// --- MIDDLEWARE ---
import { validarCompra } from '../../middlewares/compras.middleware.js';

router.post('/buy', validarCompra, buyItem); //

export default router;