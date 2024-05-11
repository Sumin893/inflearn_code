// 1. 콜백함수 : 다른함수에 인수로써 전달된 함수, callback: 나중에 실행되는.
function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("end");
}

main(() => {
  console.log("i am sub");
});




// 2. 콜백함수의 활용
function repeat(count, callback) {     //매개변수로 callback을 추가하고,
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);    //callback함수를 출력하고 인수로 idx를 넘겨주는 것.
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {    //repeatDouble
  console.log(idx * 2);
});

repeat(5, function (idx) {     //repeatTriple
  console.log(idx * 3);
});