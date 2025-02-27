// Object2 객체 심화 공부
// 1. 상수 객체 (상수로 저장한 객체) => 값 변경 추가가 불가능!

const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = 2; 상수니까 불가능. 에러

// 상수 객체이더라도, 상수 객체의 프로퍼티를 수정하는 것은 가능!!!!
animal.age = 2; // 객체 수정, 추가, 삭제 가능
animal.name = "petit";
delete animal.color;

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "박세진", // 객체의 정보를 정의
  //메서드 ( 객체의 동작을 정의 )
  sayHi() {
    console.log("앙농");
  },
};

person.sayHi(); // 이렇게 메서드 호출 가능
person["sayHi"]();
