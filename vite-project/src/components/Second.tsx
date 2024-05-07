import React from 'react'

type ChildProps = {
    test: number;
    setTest: React.Dispatch<React.SetStateAction<number>>;
}

export default function Second(child: ChildProps) {

    const handleFinal = () => {
        child.setTest((prev) => prev + 100);
    }
    
    return (
    <div>
        <label htmlFor="test3">{child.test}</label>
        <button type="button" onClick={handleFinal}>Click 3</button>
    </div>
  )
}
