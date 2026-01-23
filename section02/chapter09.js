// 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건 만족하는 요소들만 필터링해서 새로운 배열로 변환
// 조건에 의한 검색, 카테고리별 필터링 등
let arr1 = [
    { name: "홍길동", hobby: "테니스" },
    { name: "김철수", hobby: "테니스" },
    { name: "영희", hobby: "독서" }
]
const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
// 배열의 모든 요소 순회, 각각 콜백함수 실행, 그 결과값들을 모아 새로운 배열로 변환
// 원본 배열을 변형해서 새로운 배열 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    console.log(item, idx);
    return item * 2; // 이렇게 반환하고 새로운 배열을 반환
})
console.log(mapResult1);
// 실용 사례: 

let names = arr1.map((item,) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 문자열엔 되는데 정수형에는 안 됨(숫자 대소 비교 아닌 사전 순)
// 원본 배열 자체를 변형시킴!
let arr3 = ["b", "a", "c"]; 
let arr4 = [10, 3, 5];
arr3.sort();

// 오름차순 정렬
arr4.sort((a, b) => {
    // b가 a 앞으로
    if (a > b) {
        return 1; 
    } else if ( a < b) {
        return -1; // a가 b 앞으로 감
    } else {
        return 0;
    }
})
console.log(arr3);

// 4. toSorted
// 정렬된 새로운 배열 반환
// 워본 배열은 그대로
let arr6 = ["c", "a", "b"];
const sorted = arr6.toSorted();

console.log(arr6, "/", sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환