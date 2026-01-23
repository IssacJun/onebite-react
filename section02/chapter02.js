// 단락 평가
// AND, OR 연산자에서 첫번째 피연산자의 값만으로
// 이 연산의 결과를 확정할 수 있다면 두번째 피연산자에
// 접근조차 하지 않는 실행 방식

// && 연산자는 앞의 값이 Falsy이면, 뒤의 값 접근 안 함
// Falsy && Truthy or Falsy => 앞의 Falsy 값 반환
// Truthy && Truthy => 뒤의 Truthy 값 반환

// || 연산자는 Truthy이면, 뒤의 값 접근 안 함
// Truthy || Truthy => 앞의 Truthy
// Falsy || Truthy or Falsy => 뒤의 Truthy or Falsy


function returnFalse() {
    console.log("false 함수");
    
    return false
}

function returnTrue() {
    console.log("true 함수");
    
    return true
}

console.log(returnFalse() && returnTrue());
// 결과
// false 함수
// false
// returnTrue 실행되지 않았고 접근조차 하지 않았음, 
// &&에서 앞의 값이 false면 뒤에 값이 true, false 상관 없어서

console.log(returnTrue() && returnFalse()); // 이러면 둘다 호출
// || 넣으면 단락 평가가 이뤄짐

// Truthy, Falsy도 적용됨
function returnFalse() {
    console.log("false 함수");
    
    return undefined
}

function returnTrue() {
    console.log("true 함수");
    
    return 10
}

// 단락 평가 활용 사례
function printName(person) {
    // if (!person) {
    //     console.log("No data");
    //     return;
    // }

    const name = person && person.name; 
    console.log(name || "person의 값이 없음");
}

printName();