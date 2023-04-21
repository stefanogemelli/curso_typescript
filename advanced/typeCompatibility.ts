//Case 1
// interface Pet {
//   name: string
// }

// class Bird {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }

// let pet: Pet
// pet = new Dog("") // es posible porque coninciden las propiedades


//Case 2
// interface Pet {
//   name: string;
// }
// let pet: Pet;
// // dog's inferred type is { name: string; owner: string; }
// let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
// pet = dog;

//Case 3
// interface Pet {
//   name: string;
// }
// let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
// function greet(pet: Pet) {
//   console.log("Hello, " + pet.name);
// }
// greet(dog); // OK

//Case 4
// enum Status {
//   Ready,
//   Waiting,
// }
// enum Color {
//   Red,
//   Blue,
//   Green,
// }
// let status = Status.Ready;
// status = Color.Green; // Error