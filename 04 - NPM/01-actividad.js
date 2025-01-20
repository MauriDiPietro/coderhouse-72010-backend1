/*
10000 nros aleatorios 1 - 20
{
    1: 10,
    2: 70,
    3: 35,
    ...20: ...
}
*/

const obj = {};

for (let i = 0; i <= 10000; i++) {
    const numero = Math.floor(Math.random() * 20) + 1;
    console.log(numero);    //5
    
    if(!obj[numero]){       //{}
        obj[numero] = 1     //{5: 1, 2: 1, 3: 1}
    } else {
        obj[numero]++;      //{5: 2, 2: 1, 3: 1}
    }   
}

console.log(obj);

// console.log(Math.floor(Math.random() * 20));
