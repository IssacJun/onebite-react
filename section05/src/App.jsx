import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'

// vite에선 컴포넌트 경로를 안써도 됨

function App() {
  const buttonProps = {
    text: "카페",
    color: "blue",
    a: 1,
    b: 2,
    c: 3
  };

  // HTML 태그를 반환하는 함수를 컴포넌트라고 함, 이건 App 컴포넌트

  // {...buttonProps} : 스프레드 연산자, 객체 안에 있는 모든 속성값들을 다 props로 한번에 전달함

  // props 안에는 html, js 코드와 html 요소, 리액트 컴포넌트도 전달 가능
  // 자식 컴포넌트에게 children props로 자동으로 전달됨
  return (
    <>
      <Button text={"메일"} color={"red"}/>
      <Button {... buttonProps}/> 
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
      <Button>
        <Header />
      </Button>
    </>
  );
  // App: 부모 컴포넌트
  // Header, Main, Footer: 자식 컴포넌트
  // 모든 리액트 컴포넌트는 화면에 렌더링되기 위해서 App 컴포넌트(루트 컴포넌트)를 최상위 조상으로 가짐
  // 나머지는 모두 자식 컴포넌트 => 계층 구조 가짐
  // 관례상 루트 컴포넌트 이름은 App 컴포넌트  
}

export default App
