// Object(객체) : 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함.

// 1. 객체 생성 (방법 두가지)
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. Object Property (객체 속성)
// 왼쪽이 key 오른쪽이 value
let person = {
  name: "박세진",
  age: 22,
  hobby: "필테",
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 ( 점 표기법, 괄호 표기법)
// 점 표기법
let name = person.name;
console.log(name);

// 괄호 표기법
let age = person["age"]; //무조건 쌍따옴표 해야됨. 아니면 age를 전역변수로 인식해서 오류가 뜸.
console.log(age);

let property = "hobby";
console.log(person[property]);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "malatang";

console.log(person);

// 3.3 프로퍼티 수정하는 방법
person.job = "백수";

console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // 존재하면 t
let result2 = "cat" in person;

console.log(result1, result2);
