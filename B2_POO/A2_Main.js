"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A1_Camiseta_1 = require("./A1_Camiseta");
var A2_Main = /** @class */ (function () {
    function A2_Main() {
        console.log('app cargada');
    }
    A2_Main.prototype.getCamiseta = function () {
        return new A1_Camiseta_1.A1_Camiseta('amarillo', 'corta', 'adidas', 'M', 1);
    };
    return A2_Main;
}());
var main = new A2_Main();
