const var1 = 'hola'
const var2 = 10
const var3 = true
const var4 = null
const var5 = undefined

console.log(typeof var3);

console.log(new Date().toLocaleDateString());

console.log('Comisión'.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));

// throw new Error('Error personalizado');

/* ------------------------------------ - ----------------------------------- */

function hola(name){
    console.log(`Hola ${name}`);
}

hola('Juan');

const hola2 = name => console.log(`Hola ${name}`);

hola2('Carlos');


class ClaseEjemplo{
    constructor(name){
        this.name = name;
    }
    saludar(){
        console.log(`Hola ${this.name}`);
    }
}

const clase = new ClaseEjemplo('Hugo');
clase.saludar();

/* ------------------------------------ - ----------------------------------- */
const array = ['Hola', 1, true, undefined]
console.log(array);


const arrayObj = [
    {
        name: 'Juan',
        age: 30
    },
    {
        name: 'Carlos',
        age: 40
    }
]
console.log(arrayObj[0].name);

console.log(process.cwd());

