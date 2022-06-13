'use strict'


//AMBITO DE LAS VARIABLES AL TRABAJAR CON LAS FUNCIONES.

//LAS VARIABLES DECLARADAS DENTRO DEL MÉTODO, SON LOCALES AL MÉTODO. MIENTRAS QUE LAS VARIABLES QUE ESTAN POR FUERA SON GLOBALES Y SE PUEDE ACCEDER A ELLAS ESTANDO FUERA DEL MÉTODO.

function holaMundo(texto){
    var holaMundo = "texto dentro de la función";
    console.log(texto);
    console.log(numero);
    console.log(holaMundo);
}



var texto = "Hola mundo, soy una variable global";
var numero = 12;
holaMundo(texto);
