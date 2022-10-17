import { Equal, Expect } from "../../utils"

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

type result1 = Expect<Equal<head1, 'a'>>
type result2 = Expect<Equal<head2, 3>>

/* 
  해설

  배열의 첫번째 값을 도출해야하고, generic 으로 받는 타입은 any[]로 추론한다
  [첫번째값, ...나머지]를 추론해야하는데, 이를 위해 infer로 첫번째 값을 선언주는 것이다
  빈 배열의 경우 첫번째 인덱스가 존재하지 않기 때문에 없는 값이므로 never가 리턴된다
  With infer, the compiler ensures that you have declared all type variables explicitly:
*/