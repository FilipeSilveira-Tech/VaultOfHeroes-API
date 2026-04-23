import express from 'express';

const app = express();
app.use(express.json());

// ----- MIDDLEWARES -----
import errorMiddleware from './middlewares/errorMiddleware.js';
import logMiddleware from './middlewares/logMiddleware.js';
app.use(logMiddleware);

// ----- ROUTES -----
import heroesRoutes from './modules/heroes/heroes.routes.js'; // -> AQUI
// const guildaRoutes = require('./routes/guildaRouter.js');
import itemsRoutes from './modules/items/items.routes.js'; 
// const comprasRoutes = require('./modules/compras/compras.routes.js');

app.get('/teste', (req, res) => { res.send('TUDO FUNCIONANDO ✅​') })
app.use(heroesRoutes);
// app.use(guildaRoutes);
app.use(itemsRoutes);
// app.use(comprasRoutes);

export default app;