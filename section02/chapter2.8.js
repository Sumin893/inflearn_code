// 5가지 요소 순회 및 탐색 메서드
// 1. forEach : 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
     console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes : 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
console.log(isInclude); //10은 없으니까 false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20);
console.log(index);
//2를 넣으면 지금 3개 다 2지만 맨 앞의 index를 반환함. = > index 0을 반환함.
//배열안에 없는 수인 20을 넣으면 존재하지 않는다는 의미로 -1을 반환함.

let objectArr = [
  { name: "이정환" },
  { name: "홍길동" },
];

console.log(
  objectArr.indexOf({ name: "이정환" })
);
//-1. indexOf는 얕은 비교를 해서 이걸 못찾음.
//그래서 단순한 원시타입의 값을 찾을 땐 indexOf를 쓰기.


console.log(
  objectArr.findIndex(
    (item) => item.name === "이정환"
  )
);
//0. findIndex는 indexOf와 달리 찾을 수 있음.
//그래서 복잡한 객체 타입의 값을 찾을 땐 findIndex를 쓰기.

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는(=콜백함수가 참을 반환한다) 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  // if (item === 2) return true; //1
   if (item % 2 !== 0) return true; //0
}); 

console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 요소를 그대로 반환(index를 반환하는 게 아니라.)

let arr5 = [
  { name: "이정환" },
  { name: "홍길동" },
];

const finded = arr5.find(
  (item) => item.name === "이정환"
);

console.log(finded);