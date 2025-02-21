//1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

//var1이랑 var2 중 정의된 값을 출력
let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var3 ?? var2; // 둘다 정의되면 앞에껄로

// 아래같은 상황에서 유용하게 사용 !
let userName = "이정환";
let userNickName = "Winterlood";
let noUserName;

let displayName = userName ?? userNickName;
let displayName2 = noUserName ?? userNickName;

console.log(var4, var5, displayName, displayName2);

//2. typeof 연산자
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;

console.log(t1);

//3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환.
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수면 "짝수", 홀수면 "홀수"로 출력.
let result = var8 % 2 === 0 ? "짝수" : "홀수";

console.log(result);
