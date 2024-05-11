// 스코프 : 접근 가능 범위
// 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능함.
// -> 지역 스코프 : 특정 영역에서만 접근 가능함.

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {}  //함수 선언식은 함수 블록 안에서만 지역 스코프를 가짐. if, for문 안에서는 지역 스코프 안가짐.
}

//funcA(); //error뜸. -> funcB is not defined. b는 지역스코프니까 외부에서 접근할 수 없음.

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}

funcB();