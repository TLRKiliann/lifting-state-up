import { useState } from 'react';

type LiftProps = {
    isChecked: boolean;
}

const LiftingStateDown = () => {

    //state change visibility of btn (disabled or enabled)
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheck = () => {
        setIsChecked((prev) => !prev);
    }

    return (
        <div>
            <label htmlFor="lift">
                <input type="checkbox" id="lift" name="lift" checked={isChecked} onChange={handleCheck} />
                Approved the terms and conditions
            </label>
            <ButtonLift isChecked={isChecked} />
        </div>
    )
}
export default LiftingStateDown;

export const ButtonLift = ({isChecked}: LiftProps) => {
    
    const handleLift = () => {
        console.log("btn clicked => submit");
    }
    
    return (
        <div>
            {/* Visibility of btn changed */}
            <button type="button" onClick={handleLift} disabled={!isChecked}>Submit</button>
        </div>
    )
}

