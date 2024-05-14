//배열(Array): 여러개의 값을 "순차적"으로 담을 수 있는 자료 형

// 1. 배열 생성
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴 

let arrC = [
  1,
  2,
  3,
  true,
  "hello",
  null,
  undefined,
  () => {},
  {},
  [],
];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1, item2);  //1 2

arrC[0] = "hello"; //특정 원소값 수정 가능.
console.log(arrC);