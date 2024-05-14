// 1. Falsy한 값: 거짓같은 값(거짓은 아니지만 조건문 내에서는 거짓으로 평가되는 값)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0; //음수형
let f5 = NaN; //not a number
let f6 = "";
let f7 = 0n; //big integer(특수한 자료형, 아주 큰 숫자를 저장하는 데에 사용함.)

if (!f1) {
  console.log("falsy");
}

// 2. Truthy한 값: 참같은 값(참은 아니지만 조건문 내에서는 참으로 평가되는 값)
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값은 다 truthy함
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t4) {
  console.log("Truthy");
}

// 3. truthy&falsy 활용 사례
function printName(person) {
  if (!person) { //이 부분!!!!!을 줄일 수 있게 된 거임. (person이 null이나 undefined일 땐 아래를 출력한다는 것.)
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "한수민" };
printName(person);