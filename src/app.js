import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes.js";

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.use("/api", productRoutes);

export default app;
