// 단락평가(Short-circuit Evaluation):  and, or 연산자할 때 첫번째만으로도 연산의 결과를 확정지을 수 있다면, 두번째 피연산자는 접근을 하지 않는다는 것.

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() || returnFalse());
// 결과를 보면, True 함수 출력이 안됨. 첫번째 피연산자로 이미 결과를 확정지을 수 있기 때문
// Truthy, Falsy한 값에도 이거 적용됨

// 단락평가 활용 사례
function printName(person) {
  if (!person) {
    console.log(person && person.name);
  }
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
} //우와 person이 정의되어있지 않으면 첫번째 피연산만 하고 나감.

printName();
printName({ name: "박세진" });
