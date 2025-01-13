console.log(Math.pow(2, 3));

console.log(2 ** 3);

const array = [1, 2, 3, 4, 5, 6];

console.log(array.includes(9));

const arrayUsers = ["Juan", "Pedro", "Alberto"];

const test1 = (arrayUsers) => {
  if (arrayUsers.includes("Admin")) return "Acceso permitido";
  return "Acceso denegado";
};

console.log(test1(arrayUsers));

const personas = [
  { nombre: "Juan", edad: 35 },
  { nombre: "Martin", edad: 36 },
  { nombre: "Guillermo", edad: 38 },
];

const edadBuscada = 36;

const existePersona = personas.some((persona)=>{    //true - false
    return persona.edad === edadBuscada
})

const existePersonaObj = personas.find((persona)=>{     //objeto
    return persona.edad === edadBuscada
})

if(existePersona) console.log(`Existe una persona con ${edadBuscada}: ${existePersonaObj.nombre}`);


