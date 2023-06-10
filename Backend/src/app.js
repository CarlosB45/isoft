import express from "express";
import morgan from "morgan";
import config from "./config.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(authRoutes);

//settings
app.set("port", config.port);

export default app;
