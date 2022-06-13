'use strinct'


function calculadora(num1,num2){
    console.log("Hola soy la calculadora!");
    console.log("suma " + (num1 + num2));
    console.log("resta " + (num1 - num2));
    console.log("multiplicación " + (num1 * num2));
    console.log("división " + (num1 / num2));
    console.log("************************");
}

//calculadora(45,65);


//FUNCIÓN CALCULADORA2 RECIBE PARAMETRO OPCIONAL
function calculadora2(num1,num2,mostrar=false){

    if(mostrar == false){
        console.log("Hola soy la calculadora!");
        console.log("suma " + (num1 + num2));
        console.log("resta " + (num1 - num2));
        console.log("multiplicación " + (num1 * num2));
        console.log("división " + (num1 / num2));
        console.log("************************");
    }

    else if(mostrar == true){
        document.write("Hola soy la calculadora!</br>");
        document.write("suma " + (num1 + num2) + "</br>");
        document.write("resta " + (num1 - num2) + "</br>");
        document.write("multiplicación " + (num1 * num2) + "</br>");
        document.write("división " + (num1 / num2) + "</br>");
        document.write("************************");
    }
}

calculadora2(45,65,true);