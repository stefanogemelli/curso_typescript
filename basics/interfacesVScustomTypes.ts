interface Person {
  name: string,
  age: number
}

interface Employee extends Person {
  charge: string
}

const newEmployee: Employee = {
  name: "",
  age: 25,
  charge: "",
}

type User = {
  id: string
}
type Person2 = {
  name: string
}
type Admin = User & Person2 &{ // extend en types
  token: string
}

const myAdmin: Admin = {
  id: "2",
  name: "Stefano",
  token: "asd"
}
// las interfaces pueden extender de types y los types de las interfaces ( con su respectiva sintaxis )
// una diferencia clave es que las interfaces siempre utilizan clave-valor
// se recomienda priorizar el uso de interfaces

interface Developer {
  name: string,
  stack: string[]
}

interface Developer {
  phone: string
}
// se pueden mergear las interfaces
const me: Developer = {
  name: "Stefano",
  stack: ["NodeJS","Express","JavaScript","React"],
  phone: "3404221212312123"
}