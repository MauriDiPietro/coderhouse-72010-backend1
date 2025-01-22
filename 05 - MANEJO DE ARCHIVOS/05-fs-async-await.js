const fs = require("node:fs");

const path = "./prueba.txt";

const manejarArchivo = async () => {
  try {
    if (fs.existsSync(path)) {
      const info = await fs.promises.readFile(path, "utf-8");
      console.log(info);

      await fs.promises.appendFile(path, "segundo texto");
      console.log("texto agregado con exito");
    } else {
      await fs.promises.writeFile(path, "primer texto");
      console.log("archivo creado con exito");
    }
  } catch (error) {
    console.log(error);
  }
};

// manejarArchivo();

/* ------------------------------------ - ----------------------------------- */

const product = {
  name: "Anteojos de Sol",
  price: 500000,
  stock: 25,
};

const products = [
  {
    name: "Iphone",
    price: 500000,
    stock: 25,
  },
  {
    name: "Ipad",
    price: 70000,
    stock: 22,
  },
];

const pathJSON = './products.json';

const manejarProductos = async () => {
    try {
        products.push(product);
        
        await fs.promises.writeFile(pathJSON, JSON.stringify(products));   //pasar a formato json

        const info = await fs.promises.readFile(pathJSON, 'utf8'); //formato json

        const infoJS = JSON.parse(info);    //formato javascript

        infoJS.push({name: 'Macbook', price: 1000000, stock: 10});
        
        const array = infoJS.filter((prod)=> prod.name !== "Anteojos de Sol");
        
        await fs.promises.writeFile(pathJSON, JSON.stringify(array));
    } catch (error) {
        console.log(error)
    }
}

manejarProductos();



// console.log(info);
// console.log('-----------------');
// console.log(infoJS);

// stringify --> para guardar la info --> formato JSON
// parse --> para utilizar la info, manipular los datos --> formato JS - objeto javascript

// infoJS.map((product)=>console.log(product));
