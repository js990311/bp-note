import { useEffect, useRef, useState } from "react";

const TodayBp = ({record, am, pm}) => {
    const isAm = am===true ? true : false;
    const [avg, setAvg] = useState({
        systolic : 0,
        diastolic: 0
    });

    useEffect(()=>{
        let n = record.pressures.length;
        let systolic = 0;
        let diastolic = 0; 
        for(let pressure of record.pressures){
            systolic+=pressure.systolic;
            diastolic+=pressure.diastolic;
        }
        setAvg({
            systolic: systolic/n,
            diastolic : diastolic/n
        });
    }, [record]);

    return (
        <div>
            <span>
                {   
                    isAm 
                    ? "오전"
                    : "오후"
                }
            </span>
            <span>측정시간</span>
            <span>{record.time}</span>
            <div>
                <span>수축기(최대혈압)</span>
                <div>{avg.systolic}</div>
            </div>
            <div>
                <span>이완기(최소혈압)</span>
                <div>{avg.diastolic}</div>
            </div>
        </div>
    )
}

export default TodayBp;