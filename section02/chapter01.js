// Truthy(참 같은) & Falsy(거짓 같은) : 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
// 자바스크립트의 모든 값은 Truthy 또는 Falsy 함. 이를 이용하면 조건문을 간결하게 만들 수 있음.

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; //bigInteger라고 아주아주 큰값 입력할 때 씀.

// 2. Truthy한 값
// -> 7가지 Falsy한 값들 제외한 나머지 모든 값
let t1 = {};
let t2 = "hello";
let t3 = () => {};

// 3. 활용 사례

function printName(person) {
  console.log(person.name);
}

let person = { name: "박세진" };
printName(person);

// 근데 만약 person 이 정의되지 않으면 언디파인드 에러가 뜸.
// ㄴ> 이럴때 사용하자

function printName2(person) {
  if (person === undefined || person === null) {
    console.log("person의 값이 없음");
  }
}

let person2 = null;
printName2(person2);
// -> 하지만 이렇게 안되는걸 다 조건 걸기엔 힘듦!!

// 이렇게 하면 간단!
function printName3(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}
