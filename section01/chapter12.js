// 함수 표현식
function funcA() {

}

let varA = funcA;
// console.log(varA); // 함수 자체가 출력됨, 함수도 하나의 값
let varB = function () {

} // 선언되지 않은 상태, not defined, 이름없는 익명함수

varB;

// 화살표 함수
let varC = () => {
    return 1;
}
let varD = (value) => value + 1;
let varE = (value) => {
    console.log(value);
    return value + 2;
}
console.log(varE(10));