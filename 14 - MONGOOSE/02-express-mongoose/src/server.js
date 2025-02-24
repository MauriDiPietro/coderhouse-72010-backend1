import express from "express";
import { errorHandler } from "./middlewares/error-handler.js";
import productsRouter from "./routes/product-router.js";
import { initMongoDB } from "./config/db-connection.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/products", productsRouter);

app.use(errorHandler);

initMongoDB()
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.log(error));

app.listen(8080, () => console.log("Servidor corriendo en el puerto 8080"));
