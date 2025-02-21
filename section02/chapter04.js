// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
let arr3 = [4, ...arr1, 5, 6]; // 윗줄보다 훨씬 편해. 변경 가능성도 고려가능하니까

console.log(arr2);

// 배열뿐만 아니라 객체에도 적용 가능
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// Spread 연산자와 엄연히 다른 것임. 매개변수
function funcB(one, ...rest) {
  console.log(rest); //one 말고 나머지가 저장됨. ...rest 뒤에 뭐가 오면 안됨. 가장 마지막에. rest라고 안써도 됨. ...만 있음 돼.
}

funcB(...arr1);
