// 1. if 조건문 (if문)
let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
} else if (num >= 5) {
  console.log("5 이상 10 미만입니다.");
} else {
  console.log("5 미만입니다.");
}

// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

switch (animal) {
  case "dog": {
    console.log("고양이");
    break;
  }
  case "cat": {
    console.log("강아지");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  default: {
    console.log("모르는 동물입니다.");
  }
}

// 이렇게 되면 일치하는것부터 끝까지 다 출력됨.
// ㄴ> 따라서 break;를 꼭 해야함.
