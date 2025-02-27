// 3.4 Node.js 라이브러리 사용하기

// // const moduleData = require("./math");

// // console.log(moduleData.add(1, 2));
// // console.log(moduleData.sub(1, 2));

// // console.log(moduleData);

// // // 또는 밑에 방법으로 해도 됨.
// // const { add, sub } = require("./math");

// // es 모듈로 해보기
// import { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));

// // es는 .js 확장자 사용하기
// // cjs는 확장자 사용할 필요가 없음.

// import mul from "./math.js";

// console.log(mul(2, 3));

// //또는 합치는 것도 가능요
// // import mul, {add, sub} from "./math.js";

// 3.5 Node.js 라이브러리 사용하기
import randomColor from "randomcolor"; // 라이브러리에서 어떤 값을 가져올 때는 경로가 아닌 이름만 명시하면 됨. 

const color = randomColor();
console.log(color);


