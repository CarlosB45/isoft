import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import config from "./config.js";
import authRoutes from "./routes/auth.routes.js";

import Homedoctor from "./routes/doctor/home.routes.js";
import citaMedicaDoctor from "./routes/doctor/citamedica.routes.js";

import Homepaciente from "./routes/paciente/home.routes.js";
import nombredoctores from "./routes/paciente/home.routes.js";
import citaMedicaPaciente from "./routes/paciente/citamedica.routes.js";

import Homeadministrador from "./routes/administrador/home.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(citaMedicaDoctor);
app.use(citaMedicaPaciente);
app.use(Homedoctor);
app.use(Homepaciente);
app.use(nombredoctores);
app.use(Homeadministrador);

//settings
app.set("port", config.port);

export default app;
