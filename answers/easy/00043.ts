import { Equal, Expect } from "../../utils";

type Target = "a" | "b" | "c";

type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<Target, "a">;

type test = Expect<Equal<Result, Exclude<Target, "a">>>;
