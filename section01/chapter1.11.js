//함수선언: 함수가 실행되었을 때 어떤 코드들이 쓰일 것인지 미리 준비해 두는 작업

function greeting() {
  console.log("안녕하세요!");
}

greeting(); //()필수!

// 함수
function getArea1(width, height) {
  let area = width * height;

  console.log(area);
}

getArea1(10, 20);
getArea1(30, 20);
getArea1(120, 200);






let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(130, 20);
console.log(area2);

getArea(120, 200);


// 호이스팅  -> 끌어올리다 라는 뜻 : 함수 선언이 아래에 있어도 됨.
function getArea(width, height) {
  function another() {  // 중첩 함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}



