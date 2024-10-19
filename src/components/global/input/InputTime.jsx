import { useEffect, useState } from "react";

const getTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

const InputTime = ({onUpdate}) => {
    const [time, setTime] = useState(getTime());

    useEffect(
        ()=>{
            onUpdate(time);
        }
        ,[time]
    );


    return (
        <>
            <input 
                type="time"  
                value={time}
                onChange={(e)=>{
                    setTime(e.target.value);
                }}
            />
        </>
    )
}

export default InputTime;