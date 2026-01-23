// 자료형은 집합이다. String, Number 타입 등
// 원시타입: Number, String, Boolean, Null, Undefined
// 기본형 타입, 프로그래밍에 있어 가장 기본적인 값들의 타입
// 1. Number type
let num1 = 270;
let num2 = 1.3;

// console.log(num1 % num2); // 모듈러 연산
// 숫자가 아닌 독특한 값이 있음
let inf = Infinity; // 양의 무한대
let minf = -Infinity; // 음의 무한대
let nan = NaN; // 수치 연산 실패시의 값, 1 * "Hello"

// 2. String type
// "" 따옴표 없으면 문자열이 아닌 변수명으로 취급함, 그래서 저장시 not defined
// 덧샘 연산 지원
let seoul = "서울"
let junggu = "중구"
console.log(seoul + junggu); 
// `` 백틱 또는 그레이브 악센트, 템플릿 리터럴 기능
// 달러 사인과 중괄호를 통해 변수의 값을 문자열에 넣을 수 있음
let asf = `${seoul}에 살아요`;
console.log(asf);

// 3. Boolean Type(상태)
let isEmpty = false;

// 4. Null Type, 아무것도 없는 상태
// 개발자가 할당을 해줘야 하는 변수

// 5. Undefined Type
// 선언만 한 상태의 변수(초기화 하지 않으면 자동으로 할당됨)
// undefined 단 하나의 값만 가지고 있음, 존재하지 않는 값을 불러오려고 할 때
let none;
console.log(none);


// 객체타입: Object(Array, Function, RegexExp(리젝트))