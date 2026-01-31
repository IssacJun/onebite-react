import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

import { useRef, useReducer, useCallback, createContext } from 'react'

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

function reducer(state, action) {  
  switch (action.type) {
    case "CREATE": 
      return [action.data, ...state]
    case "UPDATE":
      return state.map((item) => 
        item.id === action.targetId
        ? {...item, isDone: !item.isDone}
        : item
      )
    case "DELETE":
      return state.filter(
        (item) => item.id !== action.targetId
      )
    default:
      return state
  }
}

// 컴포넌트 외부에 선언해야, 안에 있으면 리렌더링 될 때마다 계속 생성됨
export const TodoContext = createContext();
// console.log(TodoContext.Provider); // Provider 중요, 

function App() {
  const [ todos, dispatch ] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current ++,
        isDone: false,
        content,
        date: new Date().getTime(),
      }
    })
  }, [])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  }, [])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  }, [])

  return (
    <div className='App'>
      <Header />
      <TodoContext.Provider value={{
        todos,
        onCreate,
        onUpdate,
        onDelete
      }}>
        <Editor />
        <List 
          todos={todos} 
          onUpdate={onUpdate} 
          onDelete={onDelete}
        />
      </TodoContext.Provider>
    </div>
  )
}

export default App
