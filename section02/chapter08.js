// 배열 메서드(순회와 탐색)
// 5가지 요소 순회 및 탐색 메서드

// 1. foreach
// 모든 요소를 순회하면서, 각 요소에 특정 동작을 수행시킴
let arr1 = [1, 2, 3];
let doubledArr = [];
arr1.forEach((item, idx, arr) => {
    // itme: 요소, idx: 인덱스, arr: 전체 배열 값
    // console.log(idx, item * 2);
    doubledArr.push(item * 2);
});
console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드(boolean)
let arr2 = [1, 2, 2, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);

// 3. indexof
// 특정 요소의 인덱스를 찾아서 반환하는 메서드
let index = arr2.indexOf(2); 
// 동일한 요소가 있을 경우, 가장 먼저 앞에 있는 거 반환
// 객체형 배열에선 요소를 못찾음(얕은 비교로 동작함)
// 존재하지 않을 경우 -1 반환
console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 참을 반환하는 요소의 위치
// 특정 요소의 인덱스를 반환하는 메서드
// indexof 보다 좀 더 복잡한 식을 적용할 수 있음
// 객체형 배열에서 좋음, 직접 특정 프로퍼티의 값을 기준으로 비교시킬 수 있음
// 존재하지 않을 경우 -1 반환
const findedIndex = arr2.findIndex((item) => { 
    if (item === 2) return true;
})
const newFindedIndex = arr2.findIndex((item) => item === 2);
console.log(findedIndex);

// 5. find
// 모든 요소 순회하면서 콜백 함수를 만족하는 요소를 그대로 반환함
let arr5 = [
    { name: "홍길동" },
    { name: "김철수" },
    { name: "김철수" }
]
let finded = arr5.find((item) => item.name === "김철수");
console.log(finded);

