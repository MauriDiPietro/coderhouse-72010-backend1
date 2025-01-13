/* ------------------------------------SPREAD----------------------------------- */

const array= [1,2,3,4,5,6]
console.log(...array);

console.log(Math.min(...array));

const array2 = [...array, 10, 15, 20]

console.log(array2);

const obj1 = {
    nombre: 'Juan',
    apellido: 'Gomez'
}

const obj2 = {
    ...obj1,
    edad: 30
}

console.log(obj2);

/* ---------------------------------- REST ---------------------------------- */

const myFunc = (a, b, ...args) => {
    console.log(a);
    console.log(b);
    console.log(...args);
}

myFunc(1, 2, 33, 55, 66, 'hello', true)



