"use strict";
//156 ------------- clase camiseta ---------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.A1_Camiseta = void 0;
var A1_Camiseta = /** @class */ (function () {
    function A1_Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    A1_Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    A1_Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return A1_Camiseta;
}());
exports.A1_Camiseta = A1_Camiseta;
/*var camiseta = new A1_Camiseta('amarillo','corta','adidas','M',1);

camiseta.setColor('rojo');

console.log(camiseta.getColor());*/
