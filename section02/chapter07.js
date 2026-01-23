// 배열 메서드(요소 조작, 6개)
// 1. push: 맨 뒤에 새로운 요소 추가, 추가 이후의 배열 길이를 반환함
let arr1 = [1, 2, 3];
const newLength = arr1.push(4,5,6,7);
console.log(newLength);

// 2. pop: 맨 뒤의 요소 제거, 제거된 요소 반환함
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
console.log(poppedItem, arr2);

// 3. shift: 맨 앞의 요소 제거, 제거된 요소 반환함
// 요소별 인덱스가 한 칸씩 당겨지기에 비교적 속도가 느림
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3);

// 4. unshift: 맨 앞에 새로운 요소 추가, 추가 이후의 배열 길이를 반환함
// 요소별 인덱스가 한 칸씩 미뤄지기에 비교적 속도가 느림
let arr4 = [1, 2, 3];
const unshiftedItem = arr4.unshift(0);
console.log(unshiftedItem, arr4);

// 5. slice: 배열의 특정 범위 잘라내서 새로운 배열 반환
// 원본 배열의 값이 바뀌지 않음
let arr5 = [1, 2, 3, 4, 5];
const slicedItem = arr5.slice(2, 5); // 마지막 넘버는 +1해야, 뒷 번호 삭제하면 끝까지
const slice = arr5.slice(-1) // 뒤에서부터 하나 잘라라
console.log(slicedItem, arr5, slice);

// 6. concat: 두개의 배열을 이어 붙어서 새로운 배열 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7); // arr6 + arr7
