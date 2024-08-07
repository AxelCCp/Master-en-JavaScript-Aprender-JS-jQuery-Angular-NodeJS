//159 ------------- 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A3_Camiseta2 = /** @class */ (function () {
    function A3_Camiseta2(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    A3_Camiseta2.prototype.setColor = function (color) {
        this.color = color;
    };
    A3_Camiseta2.prototype.getColor = function () {
        return this.color;
    };
    return A3_Camiseta2;
}());
var camiseta = new A3_Camiseta2('amarillo', 'corta', 'adidas', 'M', 1);
camiseta.setColor('rojo');
console.log(camiseta);
//160-----------------------------------------
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(A3_Camiseta2));
var sudadera = new Sudadera('negra', 'xxx', 'nike', 'M', 15);
console.log(sudadera);
