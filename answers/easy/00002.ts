import { Equal, Expect } from "../../utils";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [property in K]: T[property]
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

type test = Expect<
  Equal<Pick<Todo, "title" | "completed">, TodoPreview>
>;
