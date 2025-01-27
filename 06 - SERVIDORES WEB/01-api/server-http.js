// const http = require('node:http');
import http from 'node:http';
import { products } from './products.js';

const app = http.createServer((req, res)=>{
    console.log(req.method);
    console.log(req.url);
    // res.end('Mi primer servidor')
    if(req.url === '/') {
        res.end('Bienvenidos a mi servidor');
    }
    if(req.url === '/products') {
        // res.end('Estos son los productos');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products))
    }
    if(req.url === '/users') {
        res.end('Estos son los usuarios');
    }
})


app.listen(8080, ()=>console.log('Servidor corriendo en el puerto 8080'));