import path from "path";
import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";

import viewsRouter from "./routes/views-router.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(`${process.cwd()}/src/public`)));

app.engine("handlebars", handlebars.engine());
app.set("views", path.join(`${process.cwd()}/src/views`));
app.set("view engine", "handlebars");

app.use("/", viewsRouter);

const httpServer = app.listen(8080, () =>
  console.log("Servidor corriendo en el puerto 8080")
);

const socketServer = new Server(httpServer);

const products = [];

socketServer.on("connection", (socket) => {
  console.log(`Usuario conectado ${socket.id}`);
  // console.log(socket);
  socket.on("disconnect", () => {
    console.log(`Usuario desconectado ${socket.id}`);
  });

  socket.emit("saludoDesdeBack", "Bienvenido a websocket");

  socket.on("respuestaDesdeFront", (message) => {
    console.log(message);
  });

  socketServer.emit("arrayProducts", products);

  socket.on("newProduct", (prod)=>{
    // console.log(prod)
    products.push(prod);
    socketServer.emit("arrayProducts", products); //a todos
    // socket.emit("arrayProducts", products)   //solo al que emitio el evento
    // socket.broadcast.emit("arrayProducts", products) //a todos menos al que emitio el evento
  });
});

app.post('/', (req, res)=>{
    const { message } = req.body;
    socketServer.emit('message', message);
    res.send('se envió mensaje a todos los sockets')
})
