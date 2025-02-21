// 스코프 (Scope ) : 범위를 뜻함.
// 변수나 함수에 접근하거나 호출할 수 있는 범위를 말 함.
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스토프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
}

funcA();
console.log(a);
// console.log(b); 지역스코프니까 에러뜸

if (true) {
  let c = 1; // 블록 내부니까 지역 스코프
}
