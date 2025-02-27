// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1); //현재 날짜로

let date2 = new Date("1997-01-07"); // 특정 날짜로 (시간도 가능, 점으로도 가능, 콤마로도 가능능)
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00사 00분 00초"로부터 ms가 지났는지를 의미하는 숫자값 (utc)
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new DataTransfer(ts1);

console.log(ts1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth(); // 1월: 0, 2월: 1, ... 그래서 항상 month는 1을 추가해주자
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 그러면 3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기 
console.log(date1.toDateString()); // 시간 제외하고 날짜만 
console.log(date1.toLocaleString()); // 현지 시간에 맞춰서 변환 
