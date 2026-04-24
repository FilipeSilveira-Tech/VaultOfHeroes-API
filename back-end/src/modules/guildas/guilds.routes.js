import { Router } from 'express';
const router = Router();

// --- CONTROLLER ---
import { listTopMembersGuilds, listTopPrestigeGuilds, listGuilds, seachById } from './guilds.controller.js';

// --- MIDDLEWARE ---
import { validateGuildId } from '../../middlewares/guilds.middleware.js';


router.get('/guilds/topPrestigio', listTopPrestigeGuilds);
router.get('/guilds/topMembros', listTopMembersGuilds);
router.get('/guilds', listGuilds);
router.get('/guilds/:id', validateGuildId, seachById);

export default router;