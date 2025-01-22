const fs = require('node:fs');

const path = './prueba.txt';

if(fs.existsSync(path)){
    const info = fs.readFileSync(path, 'utf-8');
    console.log(info);
    fs.appendFileSync(path, ' segundo texto');
} else fs.writeFileSync(path, `primer texto`);