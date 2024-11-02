import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecordsContext } from "../record-context/BpRecordContext";

const TodayRecord = () => {
    const {date} = useParams();
    const {datas} = useContext(RecordsContext);
    const [todayRecords, setTodayRecords] = useState({});

    useEffect(
        () => {
            const todayDate = datas.find((value)=>{
                return value.date === date
            })
            setTodayRecords(todayDate);
        }
    ,[])

    return (
        <div>
            {date}
        </div>
    );
}

export default TodayRecord;