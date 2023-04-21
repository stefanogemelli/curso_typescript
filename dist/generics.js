var myValue = {
    field: {
        id: "1",
        name: "Stefano"
    }
};
// --------------------------------- Class --------------------------------- //
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
var myObject = new MyClass(1);
var myObject2 = new MyClass("1");
// ---------------------------------- Function -------------------------------- //
function getData(id) {
    //...
}
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "Kevin"
    };
};
var myUser = fetchUser();
var res = new HttpResponse(myUser, 200, 1);
console.log(res);
