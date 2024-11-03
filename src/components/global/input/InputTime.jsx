import { useEffect, useState } from "react";


const InputTime = ({name, value, onChange}) => {

    const [time, setTime] = useState(
        value || new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
      );
    
      useEffect(() => {
        // value prop이 변경되면 time 상태를 업데이트
        if (value) {
          setTime(value);
        }else{
            onChange({
                name: name,
                value: time
            })
        }
      }, [value]);
    
    return (
        <>
            <input 
                type="time"  
                value={time}
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