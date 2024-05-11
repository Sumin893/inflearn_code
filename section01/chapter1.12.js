// 1. 함수 표현식 : 함수를 변수에 저장. -> 선언문X. 값으로써 함수를 생성 
function funcA() {
  console.log("funcA");
}

let varA = funcA; //함수 자체를 문자열로도 취급. 그래서 함수자체를 변수에 담아 놓을 수 있음.
varA();

let varB = function () { //익명함수 : 이름이 없음
  console.log("funcB");
};

varB();




// 2. 화살표 함수 : 함수를 간결하게 생성.
let varC = (value) => {
  console.log(value); //10
  return value + 1; //11
};

console.log(varC(10));