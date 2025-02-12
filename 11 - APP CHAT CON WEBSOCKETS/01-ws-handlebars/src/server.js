import express from 'express';
import path from 'path'
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import viewsRouter from './routes/views.router.js';
import { msgManager } from './manager/messages.manager.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', express.static(path.join(process.cwd(), "src", "public")));

app.engine('handlebars', handlebars.engine()); 
app.set('view engine', 'handlebars');  
app.set('views', path.join(process.cwd(), "src", "views"));  

app.use('/chat', viewsRouter);

const httpServer = app.listen(8080, ()=>{
    console.log('🚀 Server listening on port 8080');
});

const socketServer = new Server(httpServer);

socketServer.on('connection', async(socket) => {
    console.log('🟢 ¡Usuario conectado!', socket.id)

    socket.on('disconnect', ()=> {
        console.log('🟠 ¡Usuario desconectado!', socket.id)
    })

    socket.on('newUser', (username) => {
        console.log(`---> ${username} ha iniciado sesion`)
        socket.broadcast.emit('newUser', username);
    })

    socketServer.emit('messages', await msgManager.getAll());

    socket.on('chat:message', async(message)=>{
        await msgManager.create(message);
        socketServer.emit('messages', await msgManager.getAll());
    })

    socket.on('chat:typing', (username)=>{
        socket.broadcast.emit('chat:typing', username)
    })
})