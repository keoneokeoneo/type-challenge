import { Equal, Expect } from "../../utils";

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

// 밑에 두 친구는 1 depth밖에 지원안함. 특히 1번은 string으로 강제가 되버림

// type DeepReadonly<T> = {
//   readonly [p1 in keyof T]: T[p1] extends String
//     ? T[p1]
//     : {
//         readonly [p2 in keyof T[p1]]: T[p1][p2];
//       };
// };

// type DeepReadonly<T> = {
//   readonly [p1 in keyof T]: T[p1] extends Record<string, any>
//     ? {
//         readonly [p2 in keyof T[p1]]: T[p1][p2];
//       }
//     : T[p1];
// };

// type DeepReadonly<T> = {
//   readonly [key in keyof T]: T[key] extends Record<string, unknown> ? DeepReadonly<T[key]> : T[key]
// }

/* 
never type: the bottom type. (그 어떤 것도 불가능하다는 타입)
keyof T extends  never => keyof T는 T의 property를 뜻하는데, never type을 상속한다는 뜻은 없다는 것을 의미
즉 T에 프로퍼티가 없는 T:type의 형태이므로 재귀를 멈춰주는 역할을 함!
*/
type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [key in keyof T]: DeepReadonly<T[key]> };

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type test = Expect<Equal<DeepReadonly<X>, Expected>>;
