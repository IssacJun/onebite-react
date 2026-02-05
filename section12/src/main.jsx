import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // 브라우저 현재 주소 저장, 감지 역할 수행
    // 감싸안으면 리액트의 모든 컴포넌트들이 현재 브라우저 주소를 쓰고 감지할 수 있음
    // 하위의 모든 컴포넌트들이 페이지 라우팅 관련 모든 데이터에 접근할 수 있음
)
