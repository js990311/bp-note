import { useEffect, useRef, useState } from "react";

const toTimerStr = (num) => {
    if(num < 10){
        return '0'+num;
    }else{
        return num.toString();
    }
}

const Timer = ({times}) => {
    const [time, setTime] = useState(times);
    const [isActive, setActive] = useState(false);
    const refInterval = useRef(null);

    useEffect( () => {
        if(isActive){
            refInterval.current = setInterval(
                () => {
                    console.log(`Timer work. now : ${time}`);
                    setTime(per=>{
                        if(per===0){
                            clearInterval(refInterval.current);
                            setActive(false);
                            return 0;
                        }else{
                            return per-1;
                        }
                    })
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
            <span>
                {toTimerStr(parseInt(time / 60))}
            </span>
            <span>:</span>
            <span>
                {toTimerStr(time % 60)}
            </span>
        </div>
    )
}

export default Timer;