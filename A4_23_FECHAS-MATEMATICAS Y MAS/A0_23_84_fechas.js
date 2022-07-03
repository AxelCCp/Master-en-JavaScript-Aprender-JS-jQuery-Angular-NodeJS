'use strict';

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

var textoHora = `
    El año es: ${year} 
    El mes es: ${mes}
    El día es: ${dia}
    La hora es: ${hora}
`;

console.log(fecha);
console.log(textoHora);

//CLASE 85 ... FUNCIONES MATEMÁTICAS EN JS

console.log(Math.random());
//SE QUITAN LOS DECIMALES 
console.log(Math.ceil(Math.random() * 1000));