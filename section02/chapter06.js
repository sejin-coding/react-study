// 순회: 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i++) {
  console.log(arr2[i]);
}

// 1.2 for of 반복문으로 순회하기
for (let item of arr) {
  console.log(item);
} // arr 에 있는 값을 하나씩 넘김

// 2. 객체 순회
let person = {
  name: "박세진",
  age: 23,
  hobby: "러닝",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 변환

let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  const value = person[key];
  console.log(key, person[key]);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 변환
let values = Object.values(person);
console.log(values);

for (let value of values) {
  console.log(value);
}

// 2.3 for in
for (let key in person) {
  const value = person[key];
  person.log(key);
} // person 객체의 key값들이 나옴

// for in(객체에만) 과 for of(배열에만) 헷갈리지 말기.
