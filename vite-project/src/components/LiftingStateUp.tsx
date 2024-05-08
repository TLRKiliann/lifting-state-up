import { useState } from "react";

type LiftProps = {
    checked: boolean;
    onCheck: (checked: boolean) => void;
}

export default function LiftingStateUp() {
    
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <form>
            {/* Component with props for lbl & input */}
            <LiftUp checked={isChecked} onCheck={setIsChecked} />

            {/* Visibility of btn changes in function of input state */}
            <button disabled={!isChecked}>Submit</button>
        
        </form>
    )
}

export const LiftUp = ({checked, onCheck}: LiftProps) => {
    return (
        <>
            <label htmlFor="liftup">

                <input type="checkbox"
                    id="liftup"
                    name="liftup"
                    checked={checked}
                    onChange={(e) => onCheck(e.target.checked)} 
                />
                Approved the terms and conditions
                
            </label>
        </>
    )
}
