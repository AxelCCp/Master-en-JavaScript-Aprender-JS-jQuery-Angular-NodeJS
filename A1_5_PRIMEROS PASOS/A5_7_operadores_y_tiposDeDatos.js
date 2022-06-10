'use strict'


alert("hola desde A5_7");

//OPERADORES
var num1 = 7;
var num2 = 12;
var operacion = num1 * num2;

alert("EL resultado de la operación es: " + operacion);

//TIPOS DE DATOS
var numero_entero = 44;
var cadena_texto_1 = "Hola 'que' tal";      //LAS DOS SE ACEPTAN
var cadena_texto_2 = 'Hola "que" tal';      //LAS DOS SE ACEPTAN

console.log(cadena_texto_1);
console.log(cadena_texto_2);


var true_false = false;
console.log(true_false);

//LA FUNCIÓN NUMBER CONVIERTE EL STRING EN CUALQUIER TIPO DE DATO NÚMERICO.
var numeroFalso = "33";
console.log(numeroFalso+7);
console.log(Number(numeroFalso)+7);
console.log(parseInt(numeroFalso)+7);         //CON PARSEINT LO PASA A ENTERO.

//FUNCIÓN STRING PARA PASAR A TEXTO LOS NÚMEROS Y EN VEZ DE SUMAR CONCATENA.
console.log(String(20)+34);

//ME INDICA EL TIPO DE LA VARIABLE
console.log(typeof numero_entero);
