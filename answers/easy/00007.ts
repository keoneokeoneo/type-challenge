import { Equal, Expect } from "../../utils";

interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [property in keyof T]: T[property]
}

type test = Expect<
  Equal<Readonly<Todo>, MyReadonly<Todo>>
>