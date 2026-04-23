import express from 'express';

const app = express();
app.use(express.json());

// ----- MIDDLEWARES -----
import errorMiddleware from './middlewares/errorMiddleware.js';
import logMiddleware from './middlewares/logMiddleware.js';
app.use(logMiddleware);

// ----- ROUTES -----
// const heroiRoutes = require('./routes/heroiRouter.js');
// const guildaRoutes = require('./routes/guildaRouter.js');
import itemsRoutes from './modules/items/items.routes.js'; // -> AQUI
// const comprasRoutes = require('./modules/compras/compras.routes.js');

app.get('/teste', (req, res) => { res.send('TUDO FUNCIONANDO ✅​') })
// app.use(heroiRoutes);
// app.use(guildaRoutes);
app.use(itemsRoutes);
// app.use(comprasRoutes);

export default app;