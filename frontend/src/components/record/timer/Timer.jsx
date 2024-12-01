import { useEffect, useRef, useState } from "react";
import './Timer.css'

const timeFormat = (num) => {
    return String(num).padStart(2, '0');
}

const toMinute = (second) => {
    let minute = parseInt(second / 60);
    return timeFormat(minute);
}

const toSecond = (second) => {
    return timeFormat(second % 60);
}

const Timer = ({times}) => {
    const [time, setTime] = useState(times);
    const [isActive, setActive] = useState(false);
    const refInterval = useRef(null);

    useEffect(()=>{
        clearInterval(refInterval.current);
        setTime(times);
        setActive(false);
    }, [times]);

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
            <div onClick={onToggle} className="timer">
                <span>
                    {toMinute(time)}
                </span>
                <span>
                    :
                </span>
                <span>
                    {toSecond(time)}
                </span>
            </div>
    )
}

export default Timer;