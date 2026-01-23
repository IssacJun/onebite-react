// 1. 배열 순회
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것
let arr = [1, 2, 3];

// 1.1 배열 인덱스
// arr.length // 배열 고유의 프로퍼티 내장됨

// 1.2 for of 반복문(단순 순회하여 요서 접근함)
for (let item of arr) {
    console.log(item);
}

// 2. 객체 순회
let person = {
    name: "우준",
    age: 35,
    hobby: "gpftm"
}
// 2.1 Object.keys
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);

for(let item of keys) {
    console.log(person[item]);
}

// 2.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

// 2.3 for in
// 프로퍼티의 키를 순서대로 할당함
for(let key in person) {
    console.log(key, person[key]);
    
}