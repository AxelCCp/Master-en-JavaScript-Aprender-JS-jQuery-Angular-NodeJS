'use strinct'


function porConsola(num1,num2){
    console.log("Hola soy la calculadora!");
    console.log("suma " + (num1 + num2));
    console.log("resta " + (num1 - num2));
    console.log("multiplicación " + (num1 * num2));
    console.log("división " + (num1 / num2));
    console.log("************************");
}

function porPantalla(num1,num2){
    document.write("Hola soy la calculadora!</br>");
    document.write("suma " + (num1 + num2) + "</br>");
    document.write("resta " + (num1 - num2) + "</br>");
    document.write("multiplicación " + (num1 * num2) + "</br>");
    document.write("división " + (num1 / num2) + "</br>");
    document.write("************************");
}

//FUNCIÓN CALCULADORA2 RECIBE PARAMETRO OPCIONAL
function calculadora2(num1,num2,mostrar=false){

    if(mostrar == false){
      porConsola(num1,num2);
    }

    else if(mostrar == true){
      porPantalla(num1,num2);
    }
    return true;
}

calculadora2(77,300,false);

calculadora2(56,98,true);