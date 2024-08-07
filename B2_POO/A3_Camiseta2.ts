
//159 ------------- 

interface CamisetaBase {
    setColor(color : string) : void ;
    getColor() : string;
}


@estampar("gucci")
class A3_Camiseta2 implements CamisetaBase{
    [x: string]: any;

    private color : string;
    private modelo : string;
    private marca : string;
    private talla : string;
    private precio : number;


    constructor(color: string, modelo:string, marca:string, talla:string, precio:number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color : string) : void {
        this.color = color;
    }

    public getColor() : string {
        return this.color;
    }
}

var camiseta = new A3_Camiseta2('amarillo','corta','adidas','M',1);

camiseta.setColor('rojo');

console.log(camiseta)

//160-----------------------------------------

class Sudadera extends A3_Camiseta2 {

    private capucha : boolean;

    setCapucha(capucha : boolean) : void {
        this.capucha = capucha;
    }

    getCapucha() : boolean {
        return this.capucha;
    }
}

var sudadera = new Sudadera('negra','xxx','nike','M', 15);
sudadera.setCapucha(true);
sudadera.setColor('azul');
console.log(sudadera);


//161-------------decorador--------------------------
function estampar(logo : string) {
    return function(target : Function){                  //recibe una funcion anonima. 
        target.prototype.estampacion = function() : void {                  //cuando se aplique este decorador a cuaquier clase,  se le va a añadir un metodo nuevo. el metodo estampacion()
            console.log('camiseta estampada con el logo de: ' + logo);
        }
    }
}


camiseta.estampacion();





