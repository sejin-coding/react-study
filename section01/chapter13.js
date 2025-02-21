// 1. 콜백 함수  : 자신이 아닌 다른 함수에, 인수로써 전달된 함수
// 콜백이 당장이 아니라 나중에 실행된다는 뜻. 메인함수가 원할 때 언제든 실행시키는 것.

function main(value) {
  console.log(value); //sub 함수 그 자체가 출력
  sub(); //sub 함수 안에 실행 된게 출력력
}

main(1);

function sub() {
  console.log("i am sub sejinee");
}

main(sub);

// 2. 콜백함수의 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}
// 이렇게 다르긴 한데 좀 중복되는걸 어떻게 할까?

function repeat2(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5);
repeatDouble(6);
repeat2(5, function (idx) {
  console.log(idx * 3);
}); //이렇게 콜백함수를 사용하면 중복코드 줄이기 가능.

// 더 간결하게 하면
repeat2(5, (idx) => {
  console.log(idx * 1);
});
