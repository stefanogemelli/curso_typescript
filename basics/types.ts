let age: string = "20"
let agmonths: number = 20
let isSenior: boolean = false
let person: Object = {}

let fruits: string[] = ["hola","como estas?"]

function saludar():void {
  console.log("Hola")
}

let response: any = "hola"
response = 1
response = true

let response2: unknown
response2 = true

let response3: number | null

type responseTypeService = string | undefined

let _res: responseTypeService;
_res?.toLocaleLowerCase()

// Type ASSERTION

let asd: any
(asd as string).slice
let asdUpperCase = <string>asd
asdUpperCase.toUpperCase()

// const canvas = <HTMLCanvasElement> document.querySelector("#canvas")
const canvas =  document.querySelector("#canvas") as HTMLCanvasElement
