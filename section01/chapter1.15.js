// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 : 더 간결함 -> 대부분 사용

// 2. 객체 프로퍼티 (객체 속성) : 객체의 정보값들 : key;value 순서로. key는 문자열이나 숫자만 가능하고 따옴표 필요없지만 띄어쓰기가 있는 문자열이면 "like cat"처럼 따옴표를 써줘야 함.
let person = {
  name: "한수민",
  age: 24,
  hobby: "테니스",
  job: "Student",
  extra: {},
  10: 20,
  "like cat": true,
};


// 3. 객체 프로퍼티를 다루는 방법

// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;  //점 표기법
console.log(name); //한수민
let age = person["age"];  //괄호 표기법 (따옴표 안에 문자열로 써줘야됨. )
console.log(age);  //24

let property = "hobby";
let hobby = person[property];
console.log(hobby);  //테니스


// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "student";
person["favoriteFood"] = "떡볶이";
console.log(person);


// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";


// 3.4 프로퍼티를 삭제하는 방법 (delete연산자 사용)
delete person.job;
delete person["favoriteFood"];


// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; //name이라는 property가 person이라는 객체 안에 있냐?
let result2 = "cat" in person;
console.log(result1);  //true
console.log(result2);  //false