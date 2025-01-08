function saludar(nombre){
    //
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    //
    //
    //
    return `Hola ${nombre}`;
}

const saludar3 = nombre => `Hola ${nombre}`;

/* ---------------------------- funcion callback ---------------------------- */

const array = [1,2,3,4,5];

const array2 = array.filter(nro=>nro > 1);

const array3 = array.filter(function(x){
    return x > 1;
})

console.log(array2);

/* ------------------------------------ - ----------------------------------- */

let num = 0;

const function1 = () =>{
    let num = 100;
    console.log(num);
}

function1();
console.log(num);

/* ---------------------------- template strings ---------------------------- */

let nombre = 'Juan';
let edad = 36;
let msg = 'Mi nombre es ' + nombre + ' y tengo ' + edad + ' años.';
let msgES6 = `Mi nombre es ${nombre} y tengo ${edad} años.`;

const msg2 = `
este es un mensaje
de muchas
lineas
ja
ja
ja
`

console.log(msg2);

