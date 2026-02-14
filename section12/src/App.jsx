import { useReducer, useRef, useEffect, createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

import './App.css'

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    // 초기값 가지고 와서 data에 넣기
    case "INIT":
      // 애초에 로컬 스토리지에서 가지고 왔기에 nextState를 쓰지 않음
      return action.data;
    case "CREATE": {
      nextState = [ action.data, ...state ];
      break;
    }
    case "UPDATE":{
      nextState = state.map((item) => 
        String(item.id) === String(action.data.id) 
      ? action.data : item
      );
      break;
    }
    case "DELETE":{
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, dispatch ] = useReducer(reducer, []);
  const idRef = useRef(0); // 초기값 0으로 설정

  // 초기값을 mount 시 스토리지에서 가져오기
  useEffect(() => {
    const storedData = localStorage.getItem("diary");

    // undefiend일 경우, useEffect의 콜백함수를 즉시 종료
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData)) {
      // parsedData가 배열이 아닐 경우, return
      setIsLoading(false);
      return;
    }
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    // Reducer 호출하며 스토리지 데이터 전달
    dispatch({
      type: "INIT",
      data: parsedData,
    })
    // 위의 작업이후에 로딩 종료
    setIsLoading(false);
  }, [])

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

  // 로딩 중 화면 보여주기
  // 로딩 완료 후, 아래 코드가 렌더링됨
  if(isLoading) {
    return <div>데이터 로딩 중 ...</div>
  }

  // 로딩이 끝나지 않았을 때, 렌더링되면 안됨
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
