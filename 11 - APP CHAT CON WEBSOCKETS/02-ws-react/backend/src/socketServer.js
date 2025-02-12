import { msgManager } from "./manager/messages.manager.js"

export const websocketServerUp = (socketServer) => {
    socketServer.on('connection', async(socket) => {
        console.log('🟢 ¡Usuario conectado!', socket.id)
    
        socket.on('disconnect', ()=> {
            console.log('🟠 ¡Usuario desconectado!', socket.id)
        })
    
        socketServer.emit('messages', await msgManager.getAll());
    
        socket.on('chat:message', async(message)=>{
            await msgManager.create(message);
            socketServer.emit('messages', await msgManager.getAll());
        })
    })
}