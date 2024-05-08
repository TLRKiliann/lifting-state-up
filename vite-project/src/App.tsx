import { useState } from 'react';
import First from './components/First.tsx';
import PassValueToNext from './components/PassValueToNext.tsx';
import LiftingStateUp from './components/LiftingStateUp.tsx';

import FirstState from './components/FirstState.tsx';
import SecondState from './components/SecondState.tsx';
import './App.css'

type ArrayProps = {
  id: number;
  text: string;
}

function App() {

  const [test, setTest] = useState<number>(0);
  
  const [mox, setMox] = useState<ArrayProps[]>([]);

  const handleClick = () => {
    setTest((prev) => prev + 10);
  }

  return (
    <>
      <label htmlFor="test">{test} + 10</label>

      <button type="button" onClick={handleClick}>
        Click
      </button>

      
      <First test={test} setTest={setTest} />

      <PassValueToNext />
      <LiftingStateUp />

      <FirstState mox={[...mox]} />
      <FirstState mox={[...mox]} />
      <SecondState setMox={setMox} />
    </>
  )
}

export default App
