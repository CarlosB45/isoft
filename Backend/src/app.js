import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import config from "./config.js";
import authRoutes from "./routes/auth.routes.js";
import citaMedicaDoctor from "./routes/doctor/citamedica.routes.js"

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(citaMedicaDoctor);

//settings
app.set("port", config.port);

export default app;
