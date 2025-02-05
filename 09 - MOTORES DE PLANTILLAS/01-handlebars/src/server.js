import express from "express";
import { errorHandler } from "./middlewares/error-handler.js";
import userRouter from './routes/user-router.js';
import viewsRouter from './routes/views-router.js';
import { __dirname } from "./dirname-utils.js";
import morgan from 'morgan'
import path from 'path'
import handlebars from 'express-handlebars'

const app = express();

/* ------------------------------------ - ----------------------------------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/* ------------------------------------ - ----------------------------------- */
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`)); //path.join(`${process.cwd()}/src/public`)

app.engine('handlebars', handlebars.engine());
app.set('views', path.join(`${process.cwd()}/src/views`));
app.set('view engine', 'handlebars');

app.use('/users', userRouter);
app.use('/', viewsRouter);

app.use(errorHandler);

app.listen(8080, () => console.log("Servidor corriendo en el puerto 8080"));
