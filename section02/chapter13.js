// 비동기 작업 처리하기 2. Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// Promise는 비동기 작업을 감싸는 객체이다.
// Promise의 효능
// 1. 비동기 작업 실행
// 2. 비동기 작업 상태 관리
// 3. 비동기 작업 결과 저장
// 4. 비동기 작업 병렬 실행
// 5. 비동기 작업 다시 실행
// 6. 기타 등등 ...

// 대기 ( Pending ) : 아직 작업이 완료되지 않은 상태 ( 유튜브  로딩 )
// ㄴ------> 성공 ( Fulfilled ) : 비동기 작업이 성공적으로 마무리 된 상태 ( 유튜브 시청 가능 )
// ㄴ------> 실패 ( Rejected ) : 비동기 작업이 실패한 상태 ( 유튜브 로딩 실패 화면 )

const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수 : executor

  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다다");
    }
    console.log("안녕");
    //resolve("안녕");
    //reject("왜 실패했는지 이유...");
  }, 2000);
});

// then 메서드
// -> 그 후에 라는 뜻
promise.then((value) => {
  console.log(value);
}); // 만약 위에 num이 null이여서 reject 되면 이것도 실행되지 않음.

// 그럴 때는 catch 써야함.
promise.catch((error) => {
  console.log(error);
});

// 하지만 결국 then과 catch의 promise는 같은 객체이기 때문에 한번에 쓰기 가능
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
// 이렇게 쓰는거를 promise chaining이라고 함.

setTimeout(() => {
  console.log(promise);
}, 3000);

// 이제 const 고정값 말고 값 바꾸면서 해보자
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);
console.log(p);

p.then((result) => {
  console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });
  return newP; // 결과값이 새로운 프로미스 객체가 됨. 콜백 지옥 막기 위해서
});

p.then((result) => {
  console.log(result);

  const newP = add10(result);

  return newP;
}).then((result) => {
  console.log(result);
}); // 더 간단하게 이렇게게

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  }) // 더더 간단하게 이렇게
  .catch((error) => {
    console.log(error);
  }); 
  // 마지막 체이닝에만 세미콜론 사용하면 됨. 
