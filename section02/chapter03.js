// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let one = arr[0]; //이렇게 값 다 할당하기 불편함.
let two = arr[1];
let three = arr[2];

let [four, five, six, seven, eight = 8] = arr; //  undefined 대비해서 = 8로 디폴트값 해줘도 됨.
console.log(four, five, six, seven, eight); //seven은 undefined라고 뜸.

// 2. 객체의 구조 분해 할당
let person = {
  name: "박세진",
  age: 22,
  hobby: "러닝",
};

let { name, age, hobby, extra = "hello" } = person; // 이것이 바로 객체 구조 분해 할당
// 위와 다르게 중괄호 사용!!
console.log(name, age, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
