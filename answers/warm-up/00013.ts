import { Equal, Expect } from "../../utils";

// expected to be string
type HelloWorld = string;

type test = Expect<Equal<HelloWorld, string>>;
