//commonjs로 실행
//const { add, sub } = require("./math");

//ESmodule system으로 실행 
// import mul from "./math.js";
// import { add, sub } from "./math.js";

//import mul, { add, sub } from "./math.js";  이렇게 동일한 경로에서 불러오는 import문은 합치는 것도 가능함. 위에 두줄과 같은 내용임.

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);