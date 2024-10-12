import { useEffect, useState } from "react";

const getDate = () => {
    return new Date().toISOString().slice(0,10);
}

const InputDate = ({onUpdate}) => {
    const [date, setDate] = useState(getDate());

    useEffect(
        ()=>{
            onUpdate(date);
        }
        ,[date]
    );

    return (
        <>
            <input type="date" 
                value={date}
                onChange={(e)=>{
                    setDate(e.target.value);
                }}
            />
        </>
    )
}

export default InputDate;