'use strict'

//CONDICIONAL IF


var edad1 = 30;
var edad2 = 12;


if(edad1 > edad2){
    console.log("Edad1 es mayor que edad2");
}else{
    console.log("La edad1 es inferior");
}

var edad = 18;
var nombre = 'David Suarez';


if(edad >= 18){
    console.log(nombre + " es mayor de edad.");
        if(edad >= 25 && edad <= 33){
            console.log("todavía eres millenial")
        }else if(edad == 18){
            console.log("tienes 18");
        }else if(edad >= 70){
            console.log("eres viejo");
        }
}else{
    console.log(nombre + " es menor de edad.");
}


var year = 2018;
if(year != 2016){
    console.log("El año no es 2016");
}


if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la post moderna");
}

if(year == 2018 || year == 2008){
    console.log("El año termina en 8");
}

if(year == 2008 || (year >= 2008 && year == 2018 )){
    console.log("El año termina en 8");
}else{
    console.log("Año no registrado");
}