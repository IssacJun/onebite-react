import { useReducer, useRef, createContext } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
// Link: Html에서 a 태그 대체 -> 필요한 컴포넌트만 교체하는 방식으로 페이지 이동
// 클라이언트 사이드 렌더링 방식(CSR)
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

import './App.css'

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번",
  }, {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번",
  }, 
]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": 
      return [ action.data, ...state ];
    case "UPDATE":
      return state.map((item) => 
        String(item.id) === String(action.data.id) 
      ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }  
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [ data, dispatch ] = useReducer(reducer, mockData);
  const idRef = useRef(3); // 초기값 3으로 설정

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id, createdDate, emotionId, content    
      }
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  return ( 
  <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{
        onCreate,
        onUpdate,
        onDelete
      }}
      >
        {/* 아래 props로 컴포넌트를 전달할 수 있다. */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/diary/:id' element={<Diary />} />
          <Route path='/edit/:id' element={<Edit />}/>
          {/* URL Parameter 명시 */}
          <Route path='/*' element={<Notfound />} />
          {/*
            위 경로 이외의 경로로 접속할 경우, 아래처럼 *(와일드카드) 작성함
          */}
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  </>
  )
}

export default App
