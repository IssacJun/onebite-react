import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'

import './App.css'

// 1. /: 모든 일기 조회, home
// 2. /new: 새로운 일기 작성
// 3. /diary: 작성된 일기 조회

function App() {
  return ( 
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/new' element={<New />} />
    <Route path='/diary' element={<Diary />} />
    <Route path='/*' element={<Notfound />} />
     {/* *는 switch문 default처럼 위의 경로에 일치하지 않을 경우 렌더링됨  */}
  </Routes>
  )
}

export default App
