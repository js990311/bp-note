import { useEffect, useRef, useState } from "react";

const Timer = ({times}) => {
    const [time, setTime] = useState(times);
    const [isActive, setActive] = useState(false);
    const refInterval = useRef(null);

    useEffect( () => {
        if(isActive){
            refInterval.current = setInterval(
                () => {
                    console.log(`Timer work. now : ${time}`);
                    setTime(per=>per-1)
                },1000
            )    
        }else{
            clearInterval(refInterval.current);
        }
    }
    ,[isActive])

    const onToggle = () => {
        console.log(`isActive = ${isActive}`);
        setActive(!isActive);
    }

    return (
        <div onClick={onToggle}>
            <span>{time}</span>
        </div>
    )
}

export default Timer;