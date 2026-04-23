import 'dotenv/config';
import app from './app.js';
import { env } from '../src/config/env.schemas.js';

app.listen(env.PORT, () => {
    console.log(`[✅ ​ONLINE] Vault of Heroes API -> rodando em http://localhost:${env.PORT}`);
})