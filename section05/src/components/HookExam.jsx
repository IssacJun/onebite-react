import { useState } from "react";

// Hook
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// const state = useState(); // 여기서 선언하면 에러 발생함


// 3. Custom hook 제작 가능(컴포넌트 분리, 다른 폴더에 모아둠)
// 함수 앞에 use 접두어를 기입하면 리액트는 이를 Custom Hook이라 판단함
function useInput() { // use써야 Custom hook으로 인정함
    const [ input, setInput ] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
        // console.log(e.target.value);
        
    }

    return [ input, onChange ];
}

const HookExam = () => {
    // const state = useState(); // 이렇게 컴포넌트 내부에서만 선언해야
    const [ input, onChange ] = useInput();
    const [ input2, onChange2 ] = useInput();
    // 2. 조건부(조건문, 반복문)로 호출될 수 없다
    // if (true) {
    //     const state = useState(); // 조건문 반복문 내 선언 안됨, 에러 발생
    // }

    return (
        <div>
            <input value={input} onChange={onChange}></input>
            <input value={input2} onChange={onChange2}></input>
        </div>
    );
}

export default HookExam;