import Second from './Second.tsx';

type ChildProps = {
    test: number;
    setTest: React.Dispatch<React.SetStateAction<number>>;
}

export default function First(child: ChildProps) {

  const handleNum = () => {
      child.setTest((prev) => prev * 2);
  }

  return (
    <div>
        <label htmlFor="num">{child.test}</label>
        <button type="button" onClick={handleNum}>
          Click 2
        </button>
        <Second test={child.test} setTest={child.setTest} />
    </div>
  )
}
