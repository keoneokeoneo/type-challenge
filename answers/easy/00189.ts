import { Equal, Expect } from "../../utils";

type ExpampleType = Promise<string>;

type MyAwaited<T> = T extends Promise<infer R> ? R : never;

type Result = Expect<Equal<MyAwaited<ExpampleType>, string>>;
