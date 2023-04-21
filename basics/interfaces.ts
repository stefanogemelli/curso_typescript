interface Person {
  name: string,
  code: string | number,
  charge: number,
  description?: string,  // el ? indica que es opcional
  sayHello: () => string;  // string es el tipo de dato que retorna
}

let person: Person = {
  name: "Stefano",
  code: "01",
  charge: 1,
  description: "Hola",
  sayHello: () => "holaaa"
}

let secondPerson: Person = {
  name: "",
  code: "",
  charge: 0,
  sayHello: () => "Holaa2"
}

secondPerson.description?.toUpperCase()  // autocompleta con el ? para que no falle

