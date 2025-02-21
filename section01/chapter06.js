//1. 묵시적 형 변환
//-> 자바스크립트 엔진이 알아서 형 변환 하는 것.

let num = 10;
let str = "20";

// num -> str 자동 변환 (문자열 + 덧셈 = 문자열). 항상은 아님
const result = num + str;
console.log(result);

//2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개"; // 한글도 있을 때는 잘 안됨.
let strToNum2 = parseInt(str1); //parseInt 내장함수 사용하면 잘 변환
console.log(strToNum2);

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(str1 + numToStr1);
