// https://www.typescriptlang.org/docs/handbook/utility-types.htmls

// Partial<T>
interface Task {
  id: number
  name: string
  description: string
}

function updateTask(id: string, task: Partial<Task>) {
  //...
}

const newTask = { name: "Stefano" }

updateTask("1", newTask)

// Required<T>
interface ToDo {
  id?: number
  name?: string
}

const myTodo: Required<ToDo> = {}

// Records<Keys, Types> Para la creación de objetos
// { Key: value }

interface CatInfo {
  age: number
  name: string
}

type CatName = "moi" | "baris" | "luffy"

const cats: Record<CatName, CatInfo> = {
  baris:{ age: 3,name: ""},
  luffy:{ age: 3,name: ""},
  moi:{ age: 3,name: ""},
}

// Pick <T, Properties>

interface ToDo2 {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<ToDo2, "title" | "completed">

const otherTodo: TodoPreview = { title: "Clean room" ,completed: false}

// Omit<T, Properties>
type TodoOmitted = Omit<ToDo2, "description">
const todoOmitted: TodoOmitted = { title: "Clean room", completed: false}

