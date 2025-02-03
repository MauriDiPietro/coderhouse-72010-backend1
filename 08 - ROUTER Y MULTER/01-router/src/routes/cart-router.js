import { Router } from "express";
const router = Router()

router.post('/', async (req, res)=>{
    //crear carrito con id y array products
    /*
    const cart = await manager.createCart({
            id: uuidv4(),
            products: []   
        });
    */
})

router.get('/:cid', async(req, res)=>{
    //retornar el cart por id

    /*
    id: "fsdfsdf",
    products: [{ product: "sdfsfsdfdf", quantity: 3 }]
    */
})

router.post('/:cid/product/:pid', async (req, res)=>{
    const { cid } = req.params
    const { pid } = req.params
    //verificar si existe el carrito dentro del json de carts
        //si no existe--> error
    //verificar si existe el producto dentro del json de products
        //si no existe--> error
    //verificar si existe el producto dentro del cart
        //const prodExist = cart.products.find((p)=>p.id === pid)
            //si no existe, creo un objeto con { product: pid, quantity: 1 }
                //lo pusheo en el array de productos (cart.products.push({ product: pid, quantity: 1 }))

            //si existe el producto dentro del cart, le sumo 1 a la cantidad (prodExist.quantity++)
})


export default router