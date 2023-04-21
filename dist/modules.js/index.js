"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_module_1 = require("./utils.module");
var myNumber = 10 * utils_module_1.PI;
var myUser = { id: (0, utils_module_1.generateId)().toString(), name: "Stefano" };
console.log({
    myNumber: myNumber,
    myUser: myUser
});
