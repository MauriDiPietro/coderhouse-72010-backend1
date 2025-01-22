const fs = require("node:fs");

const path = "./pruebaprom.txt";

if (fs.existsSync(path)) {
  fs.promises
    .readFile(path, "utf-8")
    .then((info) => {
      console.log(info);
      return fs.promises.appendFile(path, "segundo texto");
    })
    .catch((error) => console.log(error));
} else {
  fs.promises
    .writeFile(path, "primer texto")
    .then(() => console.log("archivo creado"))
    .catch((error) => console.log(error));
}

const product = {
  name: "Anteojos de Sol",
  price: 500000,
  stock: 25,
};

/*
{
  "name": "Iphone",
  "price": 500000,
  "stock": 25,
}
*/

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

products.push(product);

fs.writeFileSync(pathJSON, JSON.stringify(products));   //pasar a formato json

const info = fs.readFileSync(pathJSON, 'utf8'); //formato json

const infoJS = JSON.parse(info);    //formato javascript

infoJS.push({name: 'Macbook', price: 1000000, stock: 10});

const array = infoJS.filter((prod)=> prod.name !== "Anteojos de Sol");
// console.log(info);
// console.log('-----------------');
// console.log(infoJS);

// stringify --> para guardar la info --> formato JSON
// parse --> para utilizar la info, manipular los datos --> formato JS - objeto javascript

// infoJS.map((product)=>console.log(product));

fs.writeFileSync(pathJSON, JSON.stringify(array));

// fs.unlinkSync(pathJSON)  //elimina el archivo

