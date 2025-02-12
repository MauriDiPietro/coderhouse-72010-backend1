import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors'
import { websocketServerUp } from './socketServer.js';

const app = express();

// app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST'] }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const httpServer = app.listen(8080, ()=>{
    console.log('🚀 Server listening on port 8080');
});

const socketServer = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
});

websocketServerUp(socketServer);

