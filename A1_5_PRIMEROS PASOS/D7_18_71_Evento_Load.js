'use strict'

//EVENTO LOAD
//SE METE TODO DENTRO DEL EVENTO LOAD.
//DE ESTA MANERA, CUANDO LA PÁGINA ESTÉ CARGADA, RECIEN SE VA A EJECUTAR EL CÓDIGO.

window.addEventListener('load',function(){


    var input = document.querySelector("#campo_nombre");

    //FOCUS :
    input.addEventListener('focus', function(){
        console.log("Estás dentro del input");
    });

    //BLUR : 
    input.addEventListener('blur', function(){
        console.log("Estás fuera del input");
    });

    //KEYDOWN : 
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



});


