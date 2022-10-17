import { Equal, Expect } from "../../utils";

type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type Length<T extends readonly any[]> = T['length'];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

type result1 = Expect<Equal<teslaLength, 4>>;
type result2 = Expect<Equal<spaceXLength, 5>>;
