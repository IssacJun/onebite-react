import { Routes, Route, Link, useNavigate } from 'react-router-dom'
// Link: Html에서 a 태그 대체 -> 필요한 컴포넌트만 교체하는 방식으로 페이지 이동
// 클라이언트 사이드 렌더링 방식(CSR)
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'

import './App.css'

// 1. /: 모든 일기 조회, home
// 2. /new: 새로운 일기 작성
// 3. /diary: 작성된 일기 조회

function App() {
  // 버튼 클릭 시 페이지 이동을 위한 이벤트 훅 호출
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new") // 이동할 페이지 URL 입력
  }

  return ( 
  <>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>

      {/* <a href="/">Home</a> */}
      {/* 
        a 태그 방식으로 페이지 이동 시 CSR 방식이 아님 
        클릭 시 페이지 전체가 재렌더링
      */}

      {/* 버튼 클릭 시 페이지 이동 */}
      <button onClick={onClickButton}>New 페이지 이동</button>
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/diary' element={<Diary />} />
      <Route path='/*' element={<Notfound />} />
      {/* *(와일드카드)는 switch문 default처럼 위의 경로에 일치하지 않을 경우 렌더링됨  */}
    </Routes>
  </>
  )
  // 주의사항
  // Routes 안에는 Route 컴포넌트만 쓸 수 있음
  // Routes 외부에 작성된 컴포넌트는 모든 페이지에 동일하게 렌더링됨
}

export default App
