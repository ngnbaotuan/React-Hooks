import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);

  const handleOnClickCount = () => {
    setCount(count + 1);
  };

  return (
    <div className='App' style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleOnClickCount}>Click</button>
    </div>
  );
}
export default App;
