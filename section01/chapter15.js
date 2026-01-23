// 객체
// 객체 타입 자료형, 여러가지 값을 동시에 저장할 수 있는 자료형
// 현실 세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티
let person = {
    name: "우준",
    age: 34
}
// 프로퍼티의 key와 value
// key는 문자열이나 숫자값도 가능
// key에 따옴표 안써도 됨
// value에 함수나 객체도 가능

// 3. 객체 프로퍼티 다루기
// 3.1. 특정 프로퍼티에 접근(점, 괄호)
// 존재하지 않는 키에 대한 값은 undefined
let name = person.name2;
console.log(name);

let age = person["age"]

// 프로퍼티 존재 유무(in 연산자)
let result1 = "name" in person;
console.log(result1);

// 상수 객체
// const 사용
// 새로운 프로퍼티 추가, 수정, 삭제 가능함
// 아예 새로운 값을 할당하는 것이 안 됨
const animal = {

}


// 메서드
// 값이 함수인 프로퍼티
const person1 = {
    name: "우준",
    sayHi: () => {
        console.log("Hi!")
    }
}

person1.sayHi();
person1["sayHi"]