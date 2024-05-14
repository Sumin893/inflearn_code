//단락 평가 : 연산식에서 첫번째 값만으로도 연산의 결과를 확정할 수 있어 두번째 값에 아예 접근 안해도 되는 것.

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");  //여긴 접근, 호출조차 되지 않음. 
  return 10;
}

console.log(returnTrue() || returnFalse());
console.log(returnTrue() && returnFalse());
console.log(returnFalse() && returnTrue());



// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음"); 
  // True || True -> 앞에 있는 true값이 반환.
  // True && True -> 위에 있는 true값이 반환.
}

printName();
printName({ name: "이정환" });