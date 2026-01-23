import './App.css'
import Bulb from './components/Bulb';
import Count from './components/Counter';

// 리렌더링 발생 이유
// 1. 자신이 관리하는 state의 값이 변경될 때
// 2. 제공받는 props의 값이 변경될 때
// 3. 부모 컴포넌트가 리렌더링되면 자식도 리렌더링 
// -> 불필요한 리렌더링은 성능 저하 이슈 발생시킴
// 관련없는 두 개의 state를 하나의 컴포넌트에 넣지 않고 분리하는게 좋음

function App() {
  return (
    <>
      <Bulb />
      <Count />
    </>
  );
}

export default App
