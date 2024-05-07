import { useState } from 'react';

type LiftProps = {
    isChecked: boolean;
}

const LiftingState = () => {

    //state change visibility of btn (disabled or enabled)
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheck = () => {
        setIsChecked((prev) => !prev);
    }

    return (
        <div>
            <input type="checkbox" id="lift" name="lift" checked={isChecked} onChange={handleCheck} />

            <label htmlFor="lift">Approved the terms and conditions</label>

            <ButtonLift isChecked={isChecked} />
        </div>
    )
}
export default LiftingState;

export const ButtonLift = ({isChecked}: LiftProps) => {
    
    const handleLift = () => {
        console.log("btn clicked => submit");
    }
    
    return (
        <div>
            <button type="button" onClick={handleLift} disabled={!isChecked}>Submit</button>
        </div>
    )
}

