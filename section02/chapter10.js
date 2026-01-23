// 1. Date 객체 생성
let date1 = new Date(); // new는 생성자, 지금 시간
console.log(date1);

let date2 = new Date("1992/01/15/19:05:00");
console.log(date2);

// 타임 스탬프: 숫자값
// 1970.01.01. 00시 00분 00초로부터 몇 ms가 지났는지를 의미하는 숫자값
// UTC 협정시간시
let ts1 = date1.getTime();
console.log(ts1);

// 시간 요소 추출하는 법
let year = date1.getFullYear();
let month = date1.getMonth(); // 자바스크립트는 인덱스처럼 month가 0이 시작임, +1 해야
let date = date1.getDate();

console.log(year, month, date);


// 시간 수정
date1.setFullYear(2023);
date1.setMonth(2); // 실제론 3월
date1.setDate(31);
date1.setHours(23);
date1.setMinutes(57);
date1.setSeconds(44);


// 시간을 여러 포맷으로 출력
console.log(
    date1.toDateString() // 날짜만
);

console.log(
    date1.toLocaleDateString() // 날짜만
);