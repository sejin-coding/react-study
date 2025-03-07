// 2. 배열 메서드와 순차 탐색

// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
}); // 3회 호출

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInInclude = arr2.includes(10);

console.log(isInInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);
// 존재하지 않으면 -1 , 앞에서부터 시작해서 앞에 있는 인덱스로 반환

let objectArr = [{ name: "박세진" }, { name: "홍길동" }];
console.log(objectArr.indexOf({ name: "박세진" })); // 이러면 안됨. -1 이 나옴. 왜냐면 indexOf는 얕은비교이기 때문에. 이럴때 findIndex를 해야하는 것.

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item === 2) return true;
}); // 그럼 1이라고 반환

const findedIndex2 = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
}); // 그럼 0이라고 반환

// 더 간단하게 하기
const findedIndex3 = arr4.findIndex((item) => item % 2 !== 0);

console.log(findedIndex, findedIndex2, findedIndex3);

// 5. find ( 객체 자체를 반환함 )
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "박세진" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "박세진");

console.log(finded);
