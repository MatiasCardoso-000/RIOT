import express from "express";
import "./database/database.js";
import { router as productsRoutes } from "./routes/products.routes.js";
import { router as userRoutes } from "./routes/user.routes.js";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();

app.disable("x-powered-by");

app.use(cookieParser())
app.use(helmet());

//CORS Configurado
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

//Middleware parsing de datos
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.use("/api/auth", productsRoutes);
app.use("/api/auth", userRoutes);

// Rutas de salud del servidor
app.get("/health", (_, res) => {
  res.status(200).json({
    status: "OK",
    message: "Servidor funcionando correctamente",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
