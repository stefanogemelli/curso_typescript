namespace DatabaseEntity {
  export class User {
    constructor(public name: string){}
  }

  const myUser = new User("Stefano")
  console.log(myUser)
}

