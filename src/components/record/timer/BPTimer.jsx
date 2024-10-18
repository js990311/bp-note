import { useState } from "react";
import Timer from "./Timer"

const BPTimer = () => {
    const [restTime, setRestTime] = useState(300);

    return (
        <div>
            <Timer
                times={restTime}
            />
            <button
                onClick={()=>{
                    setRestTime(300);
                }}
            >
                5분 휴식하기
            </button>
            <button
                onClick={()=>{
                    setRestTime(60);
                }}
            >
                1분 휴식하기
            </button>
        </div>
    )
}

export default BPTimer;