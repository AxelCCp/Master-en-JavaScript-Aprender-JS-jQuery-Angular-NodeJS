'use strict'

//BOM  - BROWSER OBJECT MODEL

function getBom(){
    //ALTURA DE LA PANTALLA
    console.log(window.innerHeight);
    //ANCHO DE LA PANTALLA
    console.log(window.innerWidth);
}


getBom();


function getBom2(){
    console.log(screen.innerHeight);
    console.log(screen.innerWidth);
}

getBom2();

//REDIRIGE A LA URL Q SE PASE POR PARAMETRO
function redirect(url){
    window.location.href = url;
}

//ABRE UNA VENTANA NUEVA EN EL NAVEGADOR
function abrirVentana(url){
    window.open(url);
}
//abrirVentana("https://www.udemy.com");


//ABRE VENTANA CHICA
function abrirVentana2(url){
    window.open(url,"",width=500,height=500);
}
//abrirVentana2("https://www.udemy.com");