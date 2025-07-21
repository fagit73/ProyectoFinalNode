import "dotenv/config";
import express from "express";
import cors from "cors";

import productsRouter from "./src/routes/products.router.js";
import authRouter from "./src/routes/auth.router.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", productsRouter);
app.use("/auth", authRouter);

// Ruta base
app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API REST" });
});

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Puerto que Render asigna o 3001 para local
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
