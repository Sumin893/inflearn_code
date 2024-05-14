// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four); //1 2 3 4

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

let {
  age: myAge,
  hobby,
  name,
  extra = "hello",
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person); //이렇게 객체를 넘겼을 때만 구조분해할당을 이용가능. 여기에 person 대신 10같은 숫자 넣으면 불가능.