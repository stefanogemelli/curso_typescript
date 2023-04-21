var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("Stefano");
    console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
/// <reference path="namespaces.ts" />
var myOtherUser = new DatabaseEntity.User("Stefano2");
console.log(myOtherUser);
