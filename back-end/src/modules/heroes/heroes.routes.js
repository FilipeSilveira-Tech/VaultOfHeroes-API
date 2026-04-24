import { Router } from 'express';
const router = Router();

// --- CONTROLLER ---
import { heroById, heroInventory, listHeroes, listRichHeroes } from './heroes.controller.js';

// --- MIDDLEWARE ---
import { validateHeroId } from '../../middlewares/heroes.middleware.js';

router.get('/heroes', listHeroes);
router.get('/heroes/top', listRichHeroes);
router.get('/heroes/:id', validateHeroId, heroById);
router.get('/heroes/:id/inventory', validateHeroId, heroInventory) // => AQUI

export default router;