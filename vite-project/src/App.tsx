import { useState } from 'react';
import First from './components/First.tsx';
import './App.css'

function App() {

  const [test, setTest] = useState<number>(0);

  const handleClick = () => {
    setTest((prev) => prev + 10);
  }

  return (
    <>
      <label htmlFor="test">{test}</label>

      <button type="button" onClick={handleClick}>
        Click
      </button>

      <First test={test} setTest={setTest} />
    </>
  )
}

export default App
