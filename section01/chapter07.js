// =, 대입 연산자
// 산술 연산자(사칙연산 + %), *, /, %이 우선순위 높음
// 복합 대입 연산자(산술 + 대입)
let num7 = 10;
num7 = num7 + 20;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 증감 연산자(++, --)
let num8 = 10;
num8++; // 후위 연산, 이 라인의 명령어가 수행된 뒤에 1이 추가됨
// 예를 들어 console.log(num8++);라고 하면 console.log에 찍히고 나서 그 다음 라인에서 1이 추가됨

++num8; // 전위 연산, 이 라인의 명령어가 즉시 수행됨

// 논리 연산자(or, and, not)
let or = true || false;
let and = true && false;
let not = !true; // 반전

// 비교 연산자
let comp1 = 1 === 2; // 서로 같은지(같은 타입인지를 고려)
let comp2 = 1 !== 2; // 서로 같지 않다면

let comp3 = 2 > 1;
comp3 = 2 < 1;
comp3 = 2 >= 1;
comp3 = 2 <= 1;