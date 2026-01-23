import "./Main.css"; // CSS import할 때는 경로만 입력하면 됨

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 중괄호 안에 반복문, 조건문 등은 오류남 -> 값으로 표현되는 것만 가능하기 때문

// 2. 숫자, 문자열, 배열 값만 렌더링됨!
// Boolean, null, undefined, 객체 등은 안됨!(객체에 키를 넣어야)

// 3. 모든 태그는 닫혀있어야 함

// 4. 최상위 태그는 반드시 하나여야만 한다.(부모 요소 하나!)
// 최상위 태그로 할만한 게 없으면 <></>으로 해도 가능함
const Main = () => {
    // const number = 10;

    // 자바스크립트 변수나 연산 등을 중괄호로 렌더링할 수 있음
    // 삼항연산자도 값으로 취급돼서 렌더링 가능
    // return (
    //     <main>
    //         <h1>main</h1>
    //         <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
    //         {7}
    //         {number}
    //         {[1, 2, 3]}
    //     </main>
    // );
    const user = {
        name: "dnwns",
        isLogin: true
    };

    // 스타일 속성 부여
    // 객체 형태, 그동안의 CSS문법과는 조금 다름(camelClass로 작성)
    // JSX에선 class 대신에 className으로 작성해야
    if (user.isLogin) {
        return <div className="logout">로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }

    // return (
    //     <>
    //         {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>
    // );
}

export default Main;