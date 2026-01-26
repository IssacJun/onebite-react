import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

import { useState } from 'react'

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
  const [ todos, useTodos ] = useState(mockData);

  return (
    <div className='App'>
      <Header />
      <Editor />
      <List />
    </div>
  )
}

export default App
