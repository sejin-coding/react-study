// 비동기 작업 처리하기 3. async/wait
// async : 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
  return {
    name: "박세진",
    id: "winterlood",
  };
} // async는 promise를 반환하지 않는 함수에 붙여서 자동으로 그 함수를 비동기로 작동하도록 함.

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "박세진",
        id: "moonriver",
      });
    });
  });
} // 애초에 프로미스 반환하는 비동기 함수면 async는 별다른 일을 하지 않고 그냥 프로미스가 반환되도록 내버려둔다.

console.log(getData());

// await : async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  // getData().then((result)) 이런식으로 안해도 되고
  const data = await getData(); //getData가 반환되기를 기다렸다가 완료되면 data에 넣어줌
  console.log(data);
}
