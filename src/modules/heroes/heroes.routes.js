import { Router } from 'express';
const router = Router();

// --- CONTROLLER ---
import { heroById, listHeroes, listRichHeroes } from './heroes.controller.js';

// --- MIDDLEWARE ---
import { validateHeroId } from '../../middlewares/heroes.middleware.js';

router.get('/heroes', listHeroes);
router.get('/heroes/top', listRichHeroes);
router.get('/heroes/:id', validateHeroId, heroById);

export default router;