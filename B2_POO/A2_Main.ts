import { A1_Camiseta } from "./A1_Camiseta";

class A2_Main {

    constructor() {
        console.log('app cargada');
    }

    getCamiseta() {
        return new A1_Camiseta('amarillo','corta','adidas','M',1);
    }

}


var main = new A2_Main();