import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState, useEffect, useRef } from 'react' 

function App() {
  const [ count, setCount ] = useState(0);
  const [ input, setInput ] = useState("");

  const isMount = useRef(false); 
  // useRef는 값이 바뀌어도 컴포넌트를 다시 렌더링 시키지 않음
  // 리렌더링이 되어도 값이 안 바뀜
  
  // 1. Mount
  // 이 컴포넌트가 mount될 때 한 번 만 수행됨
  useEffect(() => {
    console.log("mount");
  }, [])

  // 2. Update
  // 2번째 인수를 작성하지 않음
  // 이 컴포넌트가 처음 렌더링될 때 한 번 수행되고, 그 이후에 이 컴포넌트가 렌더링될 때마다 수행
  useEffect(() => {
    // 최초에 mount되면서 update 단계에서 이 함수가 수행됨
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("Update");
  })

  // 3. Unmount

  
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
        { count % 2 === 0 ? <Even /> : null }
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
