'use strict'


do{

    var num1 = parseInt(prompt("introduce un primer número: ", 0));
    var num2 = parseInt(prompt("introduce un segundo número: ", 0));

    var op = prompt("Qué tipo de operación quieres hacer: SUMA / RESTA / MULT / DIV");

    switch(op.toUpperCase()) {
        
        case "SUMA": 
            console.log("La suma de " + num1 + " y " + num2 + " = " + (num1+num2));
        break;

        case "RESTA": 
            console.log("La resta de " + num1 + " y " + num2 + " = " + (num1-num2));
        break;
        
        case "MULT": 
            console.log("La multiplicación de " + num1 + " y " + num2 + " = " + (num1*num2));
        break;

        case "DIV": 
            console.log("La división de " + num1 + " y " + num2 + " = " + (num1/num2));
        break;
        
    }

    var otroCalculo = prompt("Quieres hacer otra operación matemática? SI / NO ");
    

}while(otroCalculo.toUpperCase() == "SI");