import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState, useEffect } from 'react' 

function App() {
  const [ count, setCount ] = useState(0);
  const [ input, setInput ] = useState("");
  // useEffect
  // 2번째 인수의 배열에 있는 요소(의존성 배열, deps)가 변경될 경우, 
  // 1번째 인수의 콜백함수가 실행됨
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [ count, input ]);
  
  const onClickButton = (value) => {
    // count: 현재 state 값
    // value: Controller에서 onClickButton 함수가 호출될 때 함께 전달되는 매개변수    
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
