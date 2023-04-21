var Users;
(function (Users) {
    Users[Users["normalUser"] = 0] = "normalUser";
    Users[Users["payedUser"] = 1] = "payedUser";
    Users[Users["adminUser"] = 2] = "adminUser";
})(Users || (Users = {}));
var myUser = Users.adminUser;
console.log(myUser);
