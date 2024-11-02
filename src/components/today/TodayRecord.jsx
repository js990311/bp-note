import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RecordsContext } from "../record-context/BpRecordContext";
import TodayBp from "./TodayBp";

const TodayRecord = () => {
    const {date} = useParams();
    const {datas} = useContext(RecordsContext);
    const [todayRecord, setTodayRecord] = useState({
        id: null,
        date: date, 
        am : {
            time: ''
        },
        pm : { 
            time: ''
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
                    ? <Link to={`/record/${date}/am`}>측정하러 가기</Link>  
                    : <TodayBp 
                        am = {true}
                        record={todayRecord.am}
                    />
                }
            </div>
            <div>
            {
                    todayRecord.pm.time===''
                    ? <Link to={`/record/${date}/am`}>측정하러 가기</Link> 
                    : <TodayBp 
                        pm= {true}
                        record={todayRecord.am}
                    />
                }
            </div>
        </div>
    );
}

export default TodayRecord;