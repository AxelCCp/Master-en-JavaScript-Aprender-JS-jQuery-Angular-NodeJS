'use strict'

var input = document.querySelector("#campo_nombre");


//FOCUS :INDICA CUANDO UNO ESTÁ DENTRO DE UN ELEMENTO
input.addEventListener('focus', function(){
    console.log("Estás dentro del input");
});

//BLUR : INDICA CUANDO UNO ESTÁ FUERA DEL ELEMENTO
input.addEventListener('blur', function(){
    console.log("Estás fuera del input");
});

//KEYDOWN : INDICA LA TECLA QUE SE ESTÁ PULSANDO.
// fromCharCode : CAPTURA TECLAS PRECIONADAS. SE LE PASA A LA FUNCTION UN PARAM EVENTO..
//..Y ESTE LO RECIBE EL fromCharCode.
input.addEventListener('keydown', function(event){
    console.log("pulsando esta tecla " + String.fromCharCode(event.keyCode));
});

//KEYPRESS
input.addEventListener('keypress', function(event){
    console.log("tecla presionada " + String.fromCharCode(event.keyCode));
});

//KEYUP
input.addEventListener('keyup', function(event){
    console.log("tecla soltada " + String.fromCharCode(event.keyCode));
});