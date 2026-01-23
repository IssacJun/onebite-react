// 모듈 시스템
// 모듈: 기능별로 분리된 파일(user.js -> user 모듈)
// 이런 모듈을 생성하고 불러오고 사용하는 다양한 기능을 제공하는 시스템
// Javascript의 모듈 시스템: Common JS(CJS), ES Module(ESM)(react에서도 사용되는 최신식)

// math 모듈
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// Math 모듈을 대표하는 단 하나의 기본값이 됨
// import할 때 중괄호 없이 불러야 함
export default function multiply(a, b) {
    return a * b;
}

// // 위 기능들을 내보내서 index.js에서 사용토록 함
// module.exports = {
//     // 위 함수들이 아래의 key값으로 내보내짐
//     add: add,
//     sub: sub
// }

// ES Module 시스템
// export { add, sub };
// 함수 앞에 export를 써도 됨