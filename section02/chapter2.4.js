// 1. Spread 연산자
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2);


function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);


// 2. Rest 매개변수
// 나머지 매개변수 : 여러개의 매개변수를 받아야 할 때 배열 형태로 한 방에 이 여러 개의 매개변수를 받아올 수 있도록 함.
// 뒤에는 추가적으로 오면 안됨. 앞에 빼고 나머지니까. 이름은 아무렇게나 해도 됨. 아래처럼 djdjdj로 해도됨.

function funcB(one, two, ...djdjdj) {
  console.log(djdjdj);
}

funcB(...arr1);