'use strict'

//CLASE20
//PRUEBAS CON LET Y VAR


// ----- PRUEBA CON VAR ------
var numero = 40;
console.log(numero)  // valor 40

if(true){
    var numero = 50;
    console.log(numero) // valor 50
}

console.log(numero) // valor 50



//PRUEBA CON LET 
var texto =  "Curso de JS de Victor Robles";
console.log(texto);                             //VALOR "

if(true){
    let texto = "Curso de laravel 5 de Victor Robles";                         //LET SOLO VA A ACTUAR A NIVEL DE BLOQUE. FUERA DEL IF SERÁ  Curso de JS.
    console.log(texto);                        //VALOR laravel 5
} 


console.log(texto);     // VALOR JS