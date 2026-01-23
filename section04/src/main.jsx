import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot: 인수로 전달받은 HTML 요소를 리액트의 루트로 생성함
// render: App 컴포넌트를 렌더링함
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
