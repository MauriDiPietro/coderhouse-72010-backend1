const moment = require('moment');

const hoy = moment();

console.log(hoy.format('MMMM Do YYYY, h:mm a'));

const fechaNacimiento = moment('1991-11-10', 'YYYY-MM-DD')

console.log(fechaNacimiento);

if(fechaNacimiento.isValid()){
    console.log(`Desde mi nacimiento han pasado ${hoy.diff(fechaNacimiento, 'days')} días`);
    console.log(`${moment('19911110').fromNow()}`);
}

