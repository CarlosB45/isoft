import { Router } from "express";
import {
  login,
  logout,
  profile,
  register,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validate } from "../middlewares/Validator.middleware.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validators.js";

const router = Router();

router.post("/register", validate(registerValidator), register);
router.post("/login", validate(loginValidator), login);
router.post("/logout", logout);

router.get("/profile", authRequired, profile);

export default router;
