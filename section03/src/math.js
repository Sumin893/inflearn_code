//math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

//commonjs로 실행
// module.exports = {
//   add,
//   sub,
// };

//ESmodule system으로 실행
//export { add, sub };