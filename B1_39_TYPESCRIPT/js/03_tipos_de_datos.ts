
let cadena : string = 'jahsgdj';
let numero : number = 1234;
let bol : boolean = true;

let cualquiera : any = "hola";
cualquiera = 1235;

var myArray : Array<string> = ['php', 'java', 'python'];

var myArray2 : number[] = [1,2,3,4,6,7];

console.log(cadena, numero, bol, cualquiera, myArray, myArray2);


//152------------- una variable q puede ser de 2 tipos. ----------------------

let miVariable2Tipos : string | number = 12345;                                            
miVariable2Tipos = 'akjshda';

console.log(miVariable2Tipos);


//153------------- puedo crear uun tipo que soporte más de un tipo -----------

type stringOrNumber = string | number;

let miVariable2Tipos_2 : stringOrNumber = 'sdfksjhdf';

miVariable2Tipos_2 = 73254;

console.log(miVariable2Tipos_2);


//154--------------let v/s var -----------------------------------------------

//let se usa a nivel de bloque,  mientras que var es a nivel global. Si se usa una variable var 2 veces con el mismo nombre,  ...
//... la nueva variable redefine su valor. 

var numero1 = 10;
var numero2 = 12;

if(numero1==10){
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);  //44 y 55
}

console.log(numero1, numero2); //10 y 55
