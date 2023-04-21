enum Users{
  normalUser, // => 0
  payedUser, // => 1
  adminUser // => 2
}

enum Users2{
  normalUser = 5, // => 5
  payedUser, // => 6
  adminUser // => 7
}
enum Users3{
  normalUser = "normal", // => normal
  payedUser = "payed", // => payed
  adminUser = "admin" // => admin
}

const myUser = Users.adminUser
if( myUser === Users.adminUser){
  // ...
}
console.log(myUser) // => 2

