class Persona {
  constructor(nombre, apellido, edad, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
  }
  static variableEstatica = "contenido de la varible estatica";

  getUser() {
    return {
      firstname: this.nombre,
      lastname: this.apellido,
      age: this.edad,
      email: this.email,
    };
  }
}

const instancia1 = new Persona("Juan", "Gomez", 40, "juan@mail.com");
const instancia2 = new Persona("Carlos", "Perez", 30, "carlosp@mail.com");

console.log(Persona.variableEstatica);

console.log(instancia1.getUser());
console.log(instancia2.getUser());

/* ------------------------------------ - ----------------------------------- */

class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        return ('este animal tiene sonido');
    }

    getNombre(){
        return this.nombre;
    }
}

class Perro extends Animal {
    // hacerSonido(){
    //     return '¡Guau!'
    // }
    super(nombre){
        this.nombre = nombre
    }
}


const instPadre = new Animal('generico');
console.log(instPadre.hacerSonido());


const inst = new Perro('Firulais')
console.log(inst.getNombre());


// const nombre = 'juan';

// const getNombre = () => {
//     return nombre;
// }
