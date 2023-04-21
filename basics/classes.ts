class Animal {
  constructor() {

  }

  name: "Generic animal"
  private age = 10  // solo es accesible dentro de este scope
  protected identity = "lll" // puede ser accedida en scopes de clases hijas

  sayHi() {
    console.log("Grrr",this.age)
  }
}


const myAnimal: Animal = new Animal()
myAnimal.sayHi()


class Dog extends Animal {
  private type: string
  
  constructor(type:string){
    super()   // esta implícito cuando no usamos constructor
    this.type = type
  }
  getType(){
    console.log(this.type) 
  }
  sayHi() {
    console.log(this.identity)
  }
}

const myDog: Dog = new Dog ("pastor aleman")
myDog.getType()