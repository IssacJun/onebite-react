// 콜백 함수
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수
function main1(value) {
    console.log(1);
    console.log(2);
    value() // 나중에 실행시킬 수 있음
}

function sub() { // 콜백, 나중에 실행됨
    console.log("sub")
}

// main1(sub);

// 콜백 함수 활용
// 구조가 거의 흡사한 함수를 중복할 수 있음

function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        // console.log(idx);
        callback(idx);
    }
}


repeat(5, (idx) => {
    console.log(idx);
});
