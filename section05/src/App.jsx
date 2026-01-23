import './App.css'
import { useState } from 'react';   // State 쓰려면 import해야

// vite에선 컴포넌트 경로를 안써도 됨

function App() {
  const [ count, setCount ] = useState(0);
  const [ light, setLight ] = useState("OFF");
  // console.log(state); // 배열, [undefined, f] 반환됨
  // undefined: 새롭게 생성된 state의 값, useState 매개변수로 0 입력하면 0이 출력됨
  // f: 상태 변화 함수, state 값을 변경시킬 수 있는 함수
  // 리액트에선 state의 값이 변경됐을 때만 리렌더링 됨
  
  return (
    <>
      <div>
        <h1>{ light }</h1>
        <button onClick={() => {
          setLight( light === "OFF" ? "ON" : "OFF" )
        }}>{ light === "OFF" ? "켜기" : "끄기"  }</button>
      </div>
      <div>
        <h1>{ count }</h1>
        <button onClick={() => {
          setCount(count + 1)
        }}></button>
      </div>
    </>
  );
  // ==> 버튼 클릭했을 때 리렌더링, App 함수를 다시 호출하고 새로운 값 렌더링 -> 리렌더링
}

export default App
