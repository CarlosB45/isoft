import { Router } from "express";
import { authRequired } from "../../middlewares/validateToken.js";
import { roleRequired } from "../../middlewares/authRol.middleware.js";
import {
  getCitaMedica,
  getCitasMedica,
  createCitaMedica,
  deleteCitaMedica,
  updateCitaMedica,
} from "../../controllers/citamedica.controller.js";
import { validate } from "../../middlewares/Validator.middleware.js";
import { createCita } from "../../validators/citamedica.validator.js";

const router = Router();

router.get(
  "/doctor/citamedica",
  authRequired,
  roleRequired("doctor"),
  getCitasMedica
);

router.get(
  "/doctor/citamedica/:id",
  authRequired,
  roleRequired("doctor"),
  getCitaMedica
);

/*router.post(                   esto ira en el crud del paciente
  "/doctor/citamedica",
  authRequired,
  roleRequired("doctor"),
  validate(createCita),
  createCitaMedica
);*/ 

router.delete(
  "/doctor/citamedica/:id",
  authRequired,
  roleRequired("doctor"),
  deleteCitaMedica
);

router.put(
  "/doctor/citamedica/:id",
  authRequired,
  roleRequired("doctor"),
  updateCitaMedica
);

export default router;
