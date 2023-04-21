interface PersonInterface {
  name: string,
  code: string | number,
  charge: number,
  description?: string,
  sayHello: () => string;
}

class PersonClass {
  sayHello() {
    console.log("Grr")
  }
}

const personOne: PersonInterface = {
  name: "",
  code: "",
  charge: 0,
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  }
}

const personTwo: PersonClass = new PersonClass()
personTwo.sayHello()

interface PetInterface {
  sayHello:() => string
}

class PetClass {
  sayHello(){
    return "Hola"
  }
}

// el implements determina que la clase debe tener los metodos de la interface (controla que sigamos el contrato)
class Dog implements PetInterface {
  sayHello: () => "Hola desde Dog";
}

// el extends incluye los métodos de la class (reutiliza código)
class Cat extends PetClass { }

//Diferencias
//1. la interface determina la estructura del objeto y la class determina adicionalmente que va a contener o que codigo van a ejecutar los métodos
