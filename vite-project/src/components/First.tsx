import Second from './Second.tsx';

type ChildProps = {
    test: number;
    setTest: React.Dispatch<React.SetStateAction<number>>;
}

export default function First({test, setTest}: ChildProps) {

  const handleNum = () => {
      setTest((prev) => prev * 2);
  }

  return (
    <div>
        <label htmlFor="num">{test} x 2</label>
        <button type="button" onClick={handleNum}>
          Click 2
        </button>
        <Second test={test} setTest={setTest} />
    </div>
  )
}
