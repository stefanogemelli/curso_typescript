interface myInterface<T> {
  field: T
}

interface Example {
  id: string
  name: string
}

const myValue: myInterface<Example> = {
  field: {
    id:"1",
    name: "Stefano"
  }
}

// --------------------------------- Class --------------------------------- //

class MyClass<T> {
  field: T

  constructor(field: T){
    this.field = field
  }
}

const myObject: MyClass<number> = new MyClass(1)
const myObject2: MyClass<string> = new MyClass("1")

// ---------------------------------- Function -------------------------------- //

function getData<T>(id: string): Promise<T> | void{
  //...
}

// ---------------------------------- Example with class -------------------------------- //

interface UserResponse {
  id: number
  name: string
}

class HttpResponse<T> {
  data: T
  status: number 
  code: number

  constructor(data: T, status: number, code: number){
    this.data = data
    this.status = status
    this.code = code
  }
}

const fetchUser = (): UserResponse => {
  return {
    id:1,
    name: "Kevin"
  }
}

const myUser = fetchUser()
const res = new HttpResponse(myUser, 200, 1)
console.log(res);


class CRUD<T> {
  private items: T[]
  constructor(items: T[]) {
    this.items = items
  }
  addItem(item: T) {
    this.items.push(item)
  }
  removeLastItem() {
    return this.items.pop()
  }
  printItems(): T[] {
    return this.items
  }
}

const users: UserResponse[] = [
  {id:1, name: "Stefano"},
  {id:2, name: "Stefano2"},
  {id:3, name: "Stefano3"},
]

const userCRUD: CRUD<UserResponse> = new CRUD(users)
userCRUD.addItem({id: 4, name: "Stefano4"})
console.log(userCRUD.printItems())