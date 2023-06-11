import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import config from "./config.js";
import authRoutes from "./routes/auth.routes.js";
import citaMedica from "./routes/citamedica.routes.js"

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(citaMedica);

//settings
app.set("port", config.port);

export default app;
