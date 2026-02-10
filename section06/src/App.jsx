import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from 'react' 

function App() {
  const [ count, setCount ] = useState(0);
  const onClickButton = (value) => {
    // count: 현재 state 값
    // value: Controller에서 onClickButton 함수가 호출될 때 함께 전달되는 매개변수
    console.log(`count: ${count}, value: ${value}`);
    
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
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
