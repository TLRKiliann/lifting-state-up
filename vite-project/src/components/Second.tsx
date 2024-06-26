import React from 'react'

type ChildProps = {
    test: number;
    setTest: React.Dispatch<React.SetStateAction<number>>;
}

export default function Second({test, setTest}: ChildProps) {

    const handleFinal = () => {
        setTest((prev) => prev + 100);
    }
    
    return (
    <div>
        <label htmlFor="test3">{test} + 100</label>
        <button type="button" onClick={handleFinal}>Click 3</button>
    </div>
  )
}
