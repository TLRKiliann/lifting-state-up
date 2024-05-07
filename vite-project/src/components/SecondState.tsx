import {useState} from 'react';

type ChildProps = {
    setMox: React.Dispatch<React.SetStateAction<{id: number, text: string}[]>>;
}

let count = 0;

export default function SecondState({setMox}: ChildProps) {

    const [text, setText] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setText(value);
    }

    const derivatedState: string = text;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMox((prev) => [...prev, {id: count++, text: derivatedState}]);
        setText("");
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" id="mox" name="mox" value={text} onChange={(e) => handleChange(e)} />
            <button type="submit">Submit</button>
        </form>
    )
}
