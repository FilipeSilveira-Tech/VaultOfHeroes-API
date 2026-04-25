import cors from "cors";
import express from 'express';

const app = express();
app.use(express.json());

// ----- MIDDLEWARES -----
import errorMiddleware from './middlewares/errorMiddleware.js';
import logMiddleware from './middlewares/logMiddleware.js';
app.use(logMiddleware);

// ----- ROUTES -----
import heroesRoutes from './modules/heroes/heroes.routes.js'; 
import guildsRoutes from './modules/guildas/guilds.routes.js'; // -> AQUI
import itemsRoutes from './modules/items/items.routes.js'; 
import comprasRoutes from './modules/compras/compras.routes.js';
import logsRoutes from "./modules/logs/logs.routes.js";

app.use(
    cors({
        origin: ["vault-of-heroes-api-hj83.vercel.app"]
    })
);
app.get('/teste', (req, res) => { res.send('TUDO FUNCIONANDO ✅​') })
app.use(heroesRoutes);
app.use(guildsRoutes);
app.use(itemsRoutes);
app.use(comprasRoutes);
app.use(logsRoutes);

export default app;