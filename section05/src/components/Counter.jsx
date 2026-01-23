import { useState } from 'react';   // State 쓰려면 import해야

const Count = () => {
  const [ count, setCount ] = useState(0);
  
  return (
    <div>
        <h1>{ count }</h1>
        <button onClick={() => {
          setCount(count + 1)
        }}></button>
      </div>
  );
}

export default Count;