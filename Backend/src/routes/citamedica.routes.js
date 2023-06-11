import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

const router= Router();

router.get('/citamedica', authRequired, (req, res ) =>res.send('cita medica'))

export default router;