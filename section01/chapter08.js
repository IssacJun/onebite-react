// null 병합 연산자
// ??
// null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; //var1, var2 중에 null, undefined가 아닌 값을 찾아냄
// 결국 10이 저장됨
let var6 = var2 ?? var3; // 둘다 아니면 앞의 값이 저장됨
// 회원관리 시스템에서 사용자의 표시되는 이름을 보여줄 때
// 사용자의 닉네임 ?? 이름 -> 닉네임이 없으면 이름 표시

// typeof
// 값의 타입을 문자열로 반환하는 기능
// Javascript는 변수의 타입이 고정되어 있지 않음
let var7 = 1;
var7 = "hello"; // var7이 정수형 변수이지만 string으로 바꿔서 저장 가능

let t1 = typeof var7; // string
console.log(t1)

// 삼항 연산자
// 항을 3개 사용하는 연산자
// 조건식 ? 참일 때 : 거짓일 때
// 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;
// 요구사항: var8의 값이 짝수이면 짝, 홀수이면 홀
let res = var8 % 2 === 0 ? "짝수" : "홀수";
