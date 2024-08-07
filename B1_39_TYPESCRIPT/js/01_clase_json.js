var bicicleta = {

    color : 'rojo',
    modelo: 'bmx',
    frenos: 'disco',
    velocidadMax: '60km',
    
    cambiaColor : function(nuevo_color){
        bicicleta.color = nuevo_color;
        //this.color = nuevo_color;
    }

};

console.log(bicicleta);

bicicleta.cambiaColor('azul');

console.log(bicicleta);