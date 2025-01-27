import express from 'express';
import { products } from './products.js';
import { manager } from './user-manager.js';

const app = express();

/* ------------------------------------ - ----------------------------------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/* ------------------------------------ - ----------------------------------- */

app.get('/', (req, res)=>{
    res.send('Bienvenidos a mi servidor');
    // res.json()
    // res.render()
    // res.redirect()
});


app.get('/products', (req, res)=>{
    // console.log(req.query)
    const { price } = req.query
    // console.log(price)
    if(!price) return res.json(products)
    const productsFilter = products.filter(p => p.price === parseInt(price));
    return res.status(200).json(productsFilter);
    //! PRECIO: [_2000_] |BUSCAR|   -->     GET /products?price=2000
})  

app.get('/products/:precio/:name', (req, res)=>{
    // console.log(req.query)
    const { precio } = req.params
    const { name } = req.params
    // console.log(price)
    if(!precio) return res.json(products)
    const productsFilter = products.filter(p => p.price === parseInt(precio) && p.name === name);
    return res.status(200).json(productsFilter);
    //! PRECIO: [_2000_] |BUSCAR|   -->     GET /products/2000
}) 

const users = [
    { nombre: 'Juan', edad: 25, genero: 'M' }, 
    { nombre: 'Pedro', edad: 30, genero: 'M' }, 
    { nombre: 'Maria', edad: 20, genero: 'F' },
    { nombre: 'Ana', edad: 35, genero: 'F' },
    { nombre: 'Lucas', edad: 40, genero: 'M' },
    { nombre: 'Lucia', edad: 45, genero: 'F' },
    { nombre: 'Carlos', edad: 50, genero: 'M' },
    { nombre: 'Jose', edad: 55, genero: 'M' },
    { nombre: 'Julieta', edad: 60, genero: 'F' },
    { nombre: 'Mariano', edad: 65, genero: 'M' },
];

app.get('/users-example', (req, res)=>{
    const { genre } = req.query
    const { edad } = req.query
    if(!genre || genre !== 'M' && genre !== 'F') return res.json(users);
    const usersFilter = users.filter(u => u.genero === genre && u.edad === parseInt(edad));
    return res.status(200).json(usersFilter);
    //! GENERO: [_M_] |BUSCAR|   -->     GET /users?genero=M
})

app.get('/users', async(req, res)=>{
    try {
        const users = await manager.getAllUsers();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: error.message })
    }
});

app.get('/users/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        const user = await manager.getUserByid(id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
})

app.post('/', (req, res)=>{
    console.log(req.body)
})



app.listen(8080, ()=>console.log('Servidor corriendo en el puerto 8080'));