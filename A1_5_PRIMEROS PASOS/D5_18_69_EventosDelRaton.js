'use strict'

//EVENTOS DEL RATÓN

//AQUÍ SE USA LA ONCLICK
var boton = document.querySelector("#boton");
function cambiarColor(){
    console.log("me has dado click");
    var bg = boton.style.background;
    if(bg == "blue"){
        boton.style.background="green";
    }else{
        boton.style.background="blue";
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
    }
    return true;
}


//AHORA SE USA ADDEVENTLISTENER
var boton2 = document.querySelector("#boton2");
function cambiarColor2(){
    console.log("me has dado click");
    var bg = boton2.style.background;
    if(bg == "blue"){
        boton2.style.background="green";
    }else{
        boton2.style.background="blue";
        boton2.style.padding = "10px";
        boton2.style.border = "1px solid #ccc";
    }
    return true;
}


//ADDEVENTLISTENER + EVENTO CLICK : SE LE PASA UNA FUNCIÓN DE FLECHA..  
//..CALLBACK Y DENTRO DE ESTA FUNCIÓN SE PASA LA FUNCIÓN cambiarColor().
boton2.addEventListener('click', function(){
    cambiarColor2();
});

//ADDEVENTLISTENER + EVENTO MOUSE OVER :
//RECIBE EL EVENTO Y LA FUNCION CALL BACK 
boton2.addEventListener('mouseover', function(){
    boton2.style.background = "#ccc";
});

//ADDEVENTLISTENER + EVENTO MOUSE OUT :
boton2.addEventListener('mouseout', function(){
    boton2.style.background = "black";
});