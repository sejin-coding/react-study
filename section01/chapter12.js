function funcA() {
  console.log("funcA가 출력되었습니다.");
}

let varA = funcA;
console.log(varA); //varA() 이렇게 한게 아니라 함수 그 자체가 출력됨.
varA();

let varB = function funcB() {
  console.log("funcB가 출력되었습니다.");
};
//funcB가 선언식이 아니기 때문에 funcB() 이렇게 하면 안됨.
// ㄴ> 그렇기 때문에 함수 이름을 생략해도 됨!!!!!

varB();

// 값으로써 취급되는 1. 함수 표현식
// ㄴ> 위에서와는 달리 호이스팅이 안되기 때문에 위에다가 써야함.
let varC = function () {
  //이름 없는 익명함수
  console.log("funcC가 출력되었습니다.");
};

//2. 화살표 함수  ( 함수를 이전보다 빠르고 간결하게 ~)
let varD = () => {
  return 1;
};

// 위에와 같이 그냥 값을 반환하기만 한다면 더 간략히 가능
let varE = (value) => value + 2;

console.log(varD());
console.log(varE(5));
