const { multiplicar ,multiplicarpromesa} = require('./helppers/multiplicar');
const argv = require('./config/yargs')

console.clear();

let numero = argv.base;
let listar = argv.listar;
let hasta = argv.hasta;

multiplicar(numero,listar,hasta)
        .then( nombreArchivo => console.log(nombreArchivo , `creado`))
        .catch(error => console.log(error));
/*
multiplicarpromesa(5)
        .then( nombreArchivo => console.log(nombreArchivo , `creado`))
        .catch(error => console.log(error))        
*/
