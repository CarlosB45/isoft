import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getCitaMedica,
  getCitasMedica,
  createCitaMedica,
  deleteCitaMedica,
  updateCitaMedica,
} from "../controllers/citamedica.controller.js";
import { validate } from "../middlewares/Validator.middleware.js";
import { createCita } from "../validators/citamedica.validator.js";

const router = Router();

router.get("/citamedica", authRequired, getCitasMedica);

router.get("/citamedica/:id", authRequired, getCitaMedica);

router.post(
  "/citamedica",
  authRequired,
  validate(createCita),
  createCitaMedica
);

router.delete("/citamedica/:id", authRequired, deleteCitaMedica);

router.put("/citamedica/:id", authRequired, updateCitaMedica);

export default router;
