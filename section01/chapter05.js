//1. Number Type
let num1 = 25;
let num2 = 30;
console.log(num1 + num2);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; //Not a Number

//2. String Type
let myName = "세진"; //""로 안감싸면 변수로 간주 
let myLocation = "목동";
let introduce = myName + myLocation;

//백틱은 변수의 값을 동적으로 집어 넣을 수 있음. 기본적으로 문자열 만들고 
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
console.log(introduceText);

//3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//4. Null Type (아무것도 없다)
let empty = null;
console.log(empty);

//5. undefined Type (정의되지 않았다.)
let none;
console.log(none);
