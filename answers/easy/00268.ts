import { Equal, Expect } from "../../utils";

type If<C extends Boolean, T, F> = C extends true ? T : F;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

type ResultA = Expect<Equal<A, "a">>;
type ResultB = Expect<Equal<B, "b">>;
