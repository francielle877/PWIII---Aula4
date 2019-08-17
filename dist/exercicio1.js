"use strict";
exports.__esModule = true;
var pessoas_1 = require("./pessoas");
var rogerio = new pessoas_1.Pessoa(68, 1.74);
//rogerio.peso = 68
//rogerio.altura = 1.74
console.log(rogerio.imc());
console.log(rogerio.classificar());
