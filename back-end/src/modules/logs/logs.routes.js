import { Router } from "express";
const router = Router();

import { getAllLogs } from "./logs.controller.js";

router.get('/logs', getAllLogs);

export default router;