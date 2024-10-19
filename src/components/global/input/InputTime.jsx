import { useEffect } from "react";

const getTimeToString = (time) => {
    return `${time.getHours()}:${time.getMinutes()}`;
}

const InputTime = ({value, onChange}) => {

    useEffect(
        ()=>{
            onChange(
                getTimeToString(new Date())
            );
        }
        ,[]
    );


    return (
        <>
            <input 
                type="time"  
                value={value}
                onChange={(e)=>{
                    onChange(e.target.value);
                }}
            />
        </>
    )
}

export default InputTime;