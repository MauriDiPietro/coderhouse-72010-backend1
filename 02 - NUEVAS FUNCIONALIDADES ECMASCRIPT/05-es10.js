// | Eduardo                   |
// " Eduardo     "

const nombre = " Eduardo     ";
console.log(`${nombre}.`);

/* ---------------------------------- flat ---------------------------------- */

const array = [
    1, 
    2, 
        [
            3, 
            4
        ], 
        [
            5, 
            6
        ], 
        [
            7, 
                [
                    8, 
                        [
                            9
                        ]
                ]
        ]
];

console.log(array.flat(3));

/* ------------------------------------ - ----------------------------------- */

const estudiantes = [
    { nombre: 'Ana', calificaciones: [8, 9, [10, 7]] },
    { nombre: 'Leonardo', calificaciones: [6, [5, 7], 9] },
    { nombre: 'Javier', calificaciones: [3, 6, [10, 7]] }
];

const calificacionesAnidadas = estudiantes.map(est => est.calificaciones);

const listaCalificaciones = calificacionesAnidadas.flat(2);

/* ------------------------------------ - ----------------------------------- */
/*
const numeros = [1,2,3,4,5,6]
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

inicial: 0
iteracion 1: acumulador = 0 + 1 = 1
iteracion 2: acumulador = 1 + 2 = 3
*/
/* ------------------------------------ - ----------------------------------- */

const sumaCalificaciones = listaCalificaciones.reduce((total, calificacion) => total + calificacion, 0);

const promedioGral = sumaCalificaciones / listaCalificaciones.length;

console.log('Lista de calificaciones', listaCalificaciones);

console.log('promedio general', promedioGral);

