//원시타입 = 불변값(메모리 값 수정x)
//number, string, boolean등...
//값 자체로써 변수에 저장되고 복사 됨.

let p1 = 1;
let p2 = p1;

p2 = 2;
//이렇게 p2가 바뀌어도 메모리의 값은 1이 남아 있음.


//객체타입 = 가변값(메모리 값 수정o)
//object, array, function등...
//참조값을 통해 변수에 저장되고 복사 됨.
//메모리공간에 참조값을 저장함. 메모리에 있는 원본 데이터 값을 수정해버림



//객체타입 주의사항
//1. 의도치 않게 값이 수정될 수 있다.

//얕은 복사
let o1 = {name:"이정환"};
let o2 = o1;
//객체의 참조값을 복사한 것. 
//원본 객체가 수정될 수 있어 위험함.

//깊은 복사
let o1 = {name: "이정환"};
let o2 = { ... o1};
//새로운 객체를 생성하면서 property만 따로 복사 함.
//원본 객체가 수정될 일이 없어 안전함.

//2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다. 
let o1 = {name:"이정환"};
let o2 = o1;
let o3 = { ...o1 };

console.log(o1 === o2); //true
console.log(o1 === o3);  //false 참조값이 다르니까

console.log(
  JSON.stringify(O1) === JSON.stringify(o3)
); //이러면 결과가 true가 됨. "JSON.stringify()"가 객체를 문자열로 변환하는 기능이라

//얕은 비교 : 참조값을 기준으로 비교한 것.
o1 === o2

//깊은 비교 : 객체를 문자열로 변환하여 비교. JSON.stringify()이용.
JSON.stringify(o1) === JSON.stringify(o3)


//3. 배열과 함수도 사실 객체이다.