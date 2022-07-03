'use strict';

try{
    var year = 2022;
    alert(year);
    console.log(decodeURIComponent("https://www.udemy.com"));
    console.log(decodeURIComponent("https://www.ude%%%my.com")); //NO LA PUEDE DECODIFICAR ASÍ QUE MANDA AL CATCH.
}catch(error){
    console.log(error);
    alert("Ha ocurrido un error en el código");
}

