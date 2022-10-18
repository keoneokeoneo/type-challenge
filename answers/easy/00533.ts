import { Equal, Expect } from "../../utils";

// never 처리를 해줘야 하나..
type Concat<T extends any[], U extends any[]> = [...T, ...U];

type Result = Expect<Equal<Concat<[1], [2]>, [1, 2]>>;
