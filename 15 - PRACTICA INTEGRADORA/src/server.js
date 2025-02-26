import express from "express";
import morgan from "morgan";
import { initMongoDB } from "./daos/mongodb/connection.js";
import { errorHandler } from "./middlewares/error-handler.js";
import productRouter from "./routes/product-router.js";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = process.env.PORT || 8000;

app.use("/products", productRouter);

app.use(errorHandler);

initMongoDB()
  .then(() => console.log("Base de datos Mongo conectada"))
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log("Server listening on port 8080"));
