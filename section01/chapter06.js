// 형변환: 어떤 변수값의 타입을 다른 타입으로 변경
// 묵시적 형변환: 자바스크립트 엔진이 스스로 형 변환 하는 것
let num = 10;
let str = "20";

const result = num + str; // "1020", num이 string으로 됨
// console.log(result);

// 명시적 형변환: 개발자가 직접 함수 등을 이용해 형변환
// 내장함수로 직접 형변환 명시(builtin)
// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개"; // 문자열과 숫자의 조합
// let strToNum2 = Number(str2); //NaN
let strToNum2 = parseInt(str2); //10으로 나옴, 숫자가 앞에 있을때만
console.log(strToNum2);

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

