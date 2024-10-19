import { useEffect } from "react";

const getDateToString = (date) => {
    return date.toISOString().slice(0,10);
}

const InputDate = ({name, value, onChange}) => {
    
    useEffect(
        ()=>{
            onChange({
                name : 'date',
                value : getDateToString(new Date())
            });
        }, []
    )

    return (
        <>
            <input type="date" 
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

export default InputDate;