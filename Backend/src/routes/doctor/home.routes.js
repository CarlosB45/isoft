import { Router } from "express";
import { profile } from "../../controllers/auth.controller.js";
import { authRequired } from "../../middlewares/validateToken.js";
import { roleRequired } from "../../middlewares/authRol.middleware.js";

const router = Router();

router.get("/Homedoctor", authRequired, roleRequired("doctor"), profile);

export default router;