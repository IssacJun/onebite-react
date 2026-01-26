import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

import { useState, useRef } from 'react'

import './App.css'

// Mock
const mockData = [
    {
      id: 0,
      isDone: false,
      content: "React 공부",
      date: new Date().getTime(),
    }, {
      id: 1,
      isDone: false,
      content: "빨래",
      date: new Date().getTime(),
    }, {
      id: 2,
      isDone: false,
      content: "노래",
      date: new Date().getTime(),
    }
  ]

function App() {
  const [ todos, setTodos ] = useState(mockData);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newData = {
      id: idRef.current ++, // 고유 아이템
      isDone: false,
      content,
      date: new Date().getTime(),
    }

    // todos.push(newData) 
    // 이렇게 하면 안됨
    // todos는 state이기 때문에 useTodos와 같은 상태 변화 함수를 호출해야 함
    // -> 변경된 값을 리액트가 감지하고 리렌더링을 해줌

    setTodos([newData, ...todos]) // 새로운 값을 앞에, 기존의 값을 펼처서 뒤에 배치
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  )
}

export default App
