//함수 선언

function greeting(word) {
  console.log("안녕하세요!");

  return word;
}

console.log("호출 전");
console.log(greeting("Hi"));
console.log("호출 후");

function getArea(width, height) {
  let area = width * height;

  console.log(area);
}

getArea(10, 20);
getArea(30, 20);
getArea(100, 20);

// 자바스크립트에서는 함수 선언을 밑에 해도 "호이스팅"이라고 끌어올리기 때문에 에러 없이 가능
