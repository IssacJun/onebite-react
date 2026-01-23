// CommonJS 시스템
// const moduleDate = require("./math"); // math 모듈을 불러서 변수에 저장, export됐던 것이 저장됨
// const {add, sub} = require("./math"); // 객체이기에 구조 분해 할당으로 가능

// ES Module 시스템
import mul, {add, sub} from "./math.js"; // 확장자 명시해야
import randomColor from "randomcolor"; // randomColor 라이브러리에서 randomColor라는 기본값 불러옴

console.log("hello node.js");
// console.log(moduleDate); // export된 함수, 즉 객체가 저장됨

// console.log(moduleDate.add(1, 2)); // 객체라서 . 사용가능
console.log(add(1, 2));

// console.log(moduleDate.sub(4, 2));
console.log(sub(4, 2));

console.log(mul(3, 2));

const color = randomColor();
console.log(color);

// 라이브러리
// 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것
// ./node_modules: 실제 라이브러리가 설치되는 경로
// ./package-lock.json: 라이브러리에 대한 상세한 내용있음, 정확한 버전 정보(package.json엔 대략적 정보만 있음)