import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecordsContext } from "../record-context/BpRecordContext";
import TodayBp from "./TodayBp";

const TodayRecord = () => {
    const {date} = useParams();
    const {datas} = useContext(RecordsContext);
    const [todayRecord, setTodayRecord] = useState({
        id: null,
        date: date, 
        am : {
        },
        pm : { 
        }
    });

    useEffect(
        () => {
            try{
                let todayDate = datas.find((value)=>{
                    return value.date === date
                });
                if(todayDate){
                    setTodayRecord(todayDate);    
                }
            }catch(error){
                console.log(error);
            }
        }
    ,[date,datas]);

    return (
        <div>
            {date}
            <div>
                {
                    todayRecord.am.time===''
                    ? <div>데이터가 없습니다</div> 
                    : <TodayBp 
                        am = {true}
                        record={todayRecord.am}
                    />
                }
            </div>
            <div>
            {
                    todayRecord.pm.time===''
                    ? <div>데이터가 없습니다</div> 
                    : <TodayBp 
                        pm = {true}
                        record={todayRecord.am}
                    />
                }
            </div>
        </div>
    );
}

export default TodayRecord;