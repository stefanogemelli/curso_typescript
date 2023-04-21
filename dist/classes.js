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
var Animal = /** @class */ (function () {
    function Animal() {
        this.age = 10; // solo es accesible dentro de este scope
        this.identity = "lll"; // puede ser accedida en scopes de clases hijas
    }
    Animal.prototype.sayHi = function () {
        console.log("Grrr", this.age);
    };
    return Animal;
}());
var myAnimal = new Animal();
myAnimal.sayHi();
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(type) {
        var _this = _super.call(this) // esta implícito cuando no usamos constructor
         || this;
        type;
        return _this;
    }
    Dog.prototype.getType = function () {
        console.log(this.type);
    };
    Dog.prototype.sayHi = function () {
        console.log(this.identity);
    };
    return Dog;
}(Animal));
var myDog = new Dog("pastor aleman");
myDog.getType();
