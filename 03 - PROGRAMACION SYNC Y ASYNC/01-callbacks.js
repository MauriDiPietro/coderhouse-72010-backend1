const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

const operaciones = (a, b, callback) => {
    return callback(a, b)
}

console.log(operaciones(5, 4, resta));

/* ------------------------------------ - ----------------------------------- */

setTimeout(() => {
    console.log('este msj se imprime despues de 3 segundos');
}, 3000);

/* ------------------------------------ - ----------------------------------- */

const saludo = (name) => `Hola ${name}`;

const test = (cb, name) => cb(name)

console.log(test(saludo, 'Juan'));

/* ------------------------------------ - ----------------------------------- */

const procesarDato = (dato, cb) => cb(dato)

const pasarAMayusculas = (texto) => texto.toUpperCase()

console.log(procesarDato('Hola a todos', pasarAMayusculas));

/* ------------------------------------ - ----------------------------------- */

events.find((event) => event.id === id);

events.map((event)=>{
    if(event.id > maxId) maxId = event.id;
})
return maxId;