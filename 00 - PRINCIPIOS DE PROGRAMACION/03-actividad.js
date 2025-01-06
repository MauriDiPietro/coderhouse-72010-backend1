const usuarios = [
    { 
        nombre: "Pedro", 
        edad: 30,
        series: ['Breaking Bad', 'Game of Thrones'],
        peliculas: ['Cuidado bebe suelto'], 
    },
    { 
        nombre: "Oswaldo", 
        edad: 21,
        series: ['911', 'Rick and Morty'],
        peliculas: [], 
    }
];

/*
- Incrementar la edad en 1.
- Sumar una serie a la lista
*/

// for (let i = 0; i < usuarios.length; i++) {
//     usuarios[i].edad += 1;
//     usuarios[i].series.push('The Mandalorian');
// };

// console.log(usuarios);

/* ------------------------------------ - ----------------------------------- */

// usuarios.forEach((usuario)=>{
//     usuario.edad++;
//     usuario.series.push('Sorjonen');
// })

// console.log(usuarios);

/* ------------------------------------ - ----------------------------------- */

// for (const obj of usuarios) {
//     obj.edad++, obj.series.push('serie 1');
// }
// console.log(usuarios)

/* ------------------------------------ - ----------------------------------- */

const usuariosActualizados = usuarios.map(usuario => ({
    /*
    
    */
    ...usuario,
    edad: usuario.edad + 1,
    series: [...usuario.series, 'Casados con hijos'],
    peliculas: [...usuario.peliculas, 'Volver al futuro']
    // console.log(usuario)
}))

// console.log(usuariosActualizados);

/* ------------------------------------ - ----------------------------------- */

const array1 = [1, 2, 3, 4, 5];

// array1.push(6);

// console.log(...array1);


const arrayActualizado = [...array1, 6, 7];

console.log(array1);

console.log(arrayActualizado);



console.log(usuarios.map((usuario) => usuario))