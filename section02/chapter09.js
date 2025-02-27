// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환

let arr1 = [
  { name: "박세진", hobby: "러닝" },
  { name: "홍길동", hobby: "러닝" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "러닝") return true;
});

const tennisPeople2 = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);

// 2. map ( 자주 활용 매우 중요 )
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2; // 반환값도 가능
});

console.log(mapResult1);

// map으로 실용적으로 이용할 수 있는 사례
let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3);
// 만약 숫자값으로 이뤄진 배열이면 sort 작동하지 않음!! 사전순이라 숫자면 기준을 정해야함/

arr3.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라 (양수)
    return 1;
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
}); // 오름차순 정렬 완료

console.log(arr3);

// 4. toSorted ( 최신 함수 ~ )
// 3번과 달리 원본 배열 냅두고 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" "); //공백 넣어서 합치기 가능 
console.log(joined);
