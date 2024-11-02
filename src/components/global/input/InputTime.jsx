import { useEffect } from "react";

const getTimeToString = (time) => {
    return `${time.getHours()}:${time.getMinutes()}`;
}

const InputTime = ({name, value, onChange}) => {

    useEffect(
        ()=>{
            onChange({
                name : 'time',
                value : getTimeToString(new Date())
            });
        }
        ,[]
    );


    return (
        <>
            <input 
                type="time"  
                value={value}
                name={name}
                onChange={(e)=>{
                    const {name, value} = e.target;
                    onChange({
                        name : name,
                        value : value
                    });
                }}
            />
        </>
    )
}

export default InputTime;