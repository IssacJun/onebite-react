// Spread 연산자, Rest 매개변수
// Spread 연산자: 객체나 배열에 여러개의 값을 개별로 뿌려주는 역할
// ...배열: 배열의 모든 요소들을 개별로 풀어 해치다.(객체도 동일)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [4, ...arr1, 5, 6]; // 4, 1, 2, 3, 5, 6
console.log(arr3);

let obj1 = {
    a: 1,
    b: 2
}
let obj2 = {
    c: 3,
    d: 4
}
let obj3 = {
    ...obj1,
    c: 3,
    d: 4
}
console.log(obj3);
// a: 1
// b: 2
// c: 3
// d: 4

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
    // ...arr3의 length는 6인데 3개까지 매개변수로 받아서
}
funcA(...arr3)

// Rest 매개변수(나머지)
// 배열 형태로 한번에 매개변수를 받을 수 있게 한 것
function funcB(...rest) {
    console.log(rest); // 매개변수가 한 번에 배열에 한 번에 저장됨
    // (3) [1, 2, 3]
}
function funcB_1(rest) {
    console.log("funcB_1", rest);        
}
function funcC(one, ...rest) {
    console.log(one, rest);
    // one에는 1이 저장되고, 나머지 요소들이 rest에 저장됨
    // 나머지 값이 rest에 저장됨, rest 이후엔 매개변수를 추가로 선언할 수 없음
}
funcB(...arr1)
funcB_1(arr1)
funcC(...arr1)
