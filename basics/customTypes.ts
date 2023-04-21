type Person = {
  name: string,
  code: string | number,
  description?: string
}

const newPerson: Person = {
  code:"H",
  name:"Stefano"
}

type ServiceResponse = string | number | null | undefined
let response: ServiceResponse

type userCharges = "admin" | "normal" | "superUser"
const myUserType: userCharges = "admin" // autocompletado