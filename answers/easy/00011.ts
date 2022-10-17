import { Equal, Expect } from "../../utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type Expected = {
  tesla: "tesla";
  "model 3": "model 3";
  "model X": "model X";
  "model Y": "model Y";
};

type TubpleToObject<T extends readonly any[]> = {
  [key in T[number]]: key
};

type Result = TubpleToObject<typeof tuple>;

type test = Expect<Equal<Result, Expected>>;

/* 
  해설

  keyof (T: typeof tuple) => 배열의 인덱스 (0~3) + Array keys (ex: concat, ...)
  각 배열의 요소값을 키값으로 가져와야 하기 때문에 T의 number key의 value만 가져옴 (T[number])
  해당 value를 Object의 key로 사용하고, value에 key값을 넣으면 완성
*/