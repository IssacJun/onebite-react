// Truthy, Falsy
// 어떤 값이 참이나 거짓을 의미하지 않아도 조건문 내에서는 참이나 거짓으로 판별
// 참 같은 값, 거짓 같은 값 -> 조건문 활용
// Falsy -> False
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // Big Integer, 엄청 큰 수

if (!f1) {
    console.log("falsy")
}

// Truthy: Falsy 한 값들을 제외한 나머지 모두
let t1 = "hello";
let t2 = 123;
let t3 = []; // 빈 배열
let t4 = {}; // 빈 객체
let t5 = () => {};

if (t1) {
    console.log("truthy")
}

// 활용 사례
// 함수의 매개변수에 대한 예외처리

function checkPerson(name) {
    // 자동으로 null, undefined 체크
    if (!name) {
        return
    }
    // ...
}



