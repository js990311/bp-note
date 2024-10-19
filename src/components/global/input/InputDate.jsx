import { useEffect, useState } from "react";

const getDate = () => {
    return new Date().toISOString().slice(0,10);
}

const getDateToString = (date) => {
    return date.toISOString().slice(0,10);
}

const InputDate = ({value, onChange}) => {
    
    useEffect(
        ()=>{
            console.log('import now time')
            onChange(getDateToString(new Date()));
        }, []
    )

    return (
        <>
            <input type="date" 
                value={value}
                onChange={(e)=>{
                    onChange(e.target.value);
                }}
            />
        </>
    )
}

export default InputDate;