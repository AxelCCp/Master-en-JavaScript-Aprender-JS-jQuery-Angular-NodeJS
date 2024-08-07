
//156 ------------- clase camiseta ---------------

export class A1_Camiseta {

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

/*var camiseta = new A1_Camiseta('amarillo','corta','adidas','M',1);

camiseta.setColor('rojo');

console.log(camiseta.getColor());*/



