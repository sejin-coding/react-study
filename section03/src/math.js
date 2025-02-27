// math 모듈을 index.js에서 불러오기

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// //cjs common js를 이용해서 require, export로 내보내기
// module.exports = {
//   add,
//   sub : sub, //이름이 같으면 sub라고 해도 됨.
// }

//es 모듈 시스템 사용해보기
// type:module 옵션 추가해야함.
// es와 cjs는 함께 사용할 수 없음!!!! 에러 뜸. 그래서 주석 처리

//export { add, sub };

// 근데 그냥 함수 선언문 앞에다가 해도 됨.
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// default 값으로 내보내는 방법
// 기본값으로 내보내짐. 다른 모듈에서 불러올 때 새로운 임포트 문으로 불러와서 중괄호 없이 불러와야함.
// 이름은 원하는대로 해도 됨. ex) import mul from "./math.js";
export default function multiply(a, b) {
  return a + b;
}
