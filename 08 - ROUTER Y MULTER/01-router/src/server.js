import express from "express";
// import { loggerHttp } from "./middlewares/logger-http.js";
import { errorHandler } from "./middlewares/error-handler.js";
import userRouter from './routes/user-router.js';
import petsRouter from './routes/pets-router.js';
import { __dirname } from "./dirname-utils.js";
import morgan from 'morgan'

const app = express();

/* ------------------------------------ - ----------------------------------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/* ------------------------------------ - ----------------------------------- */
// app.use(loggerHttp);
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

app.use('/users', userRouter);
app.use('/pets', petsRouter);

app.use(errorHandler);

app.listen(8080, () => console.log("Servidor corriendo en el puerto 8080"));
