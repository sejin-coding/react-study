//1. 대입 연산자 =
let var1 = 1;

//2. 산술 연산자 + - * / %
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 3 + 2 * 10;
console.log(num6); //곱셈이 우선 처리 됨.

//3. 복합 대입 연산자 += -= *= /= %=
let num7 = 10;
num7 += 20;
console.log(num7);

//4. 증감 연산자
let num8 = 10;
num8++;
console.log(num8);
console.log(num8++); //이렇게 하면 +1 되기 전에 먼저 출력되니까 조심

//5. 논리 연산자
let or = true || false; // t (or 연산자)
let and = true && false; // f (and 연산자자)
let not = !true; // f

console.log(or, and, not);

//6. 비교 연산자 === 이렇게 세개 쓰는게 자바스크립트에서 권장
let comp1 = 1 === 2; // 비교할 때 == 해도 되긴 하는데 자료형 같은지는 비교가 안됨.
let comp2 = 1 !== 2;
let comp3 = "1" == 1;
let comp4 = 1 > 2;
let comp5 = 2 >= 3;

console.log(comp1, comp2, comp3, comp4, comp5);
