import { useReducer } from "react";
import InputDate from "../global/InputDate";
import InputTime from "../global/InputTime";
import BPrecordForm from "./form/BPrecordForm";
import Timer from "./Timer";
import {dateTimeReducer} from '../global/UpdateDateTime';

const BPRecord = () => {
    const [dateTime, dateTimeDispatch] = useReducer(dateTimeReducer, {
        date : '',
        time : ''
    });
    console.log(dateTime);
    return (
        <div className="record">
            <Timer times={5*60}></Timer>
            <div>
                <InputDate 
                    onUpdate={(date) => {
                        dateTimeDispatch(dateTime, {
                            type : 'DATE',
                            data : date
                        })
                    }}
                />
                <InputTime 
                    onUpdate={(time)=>{
                        dateTimeDispatch(dateTime, {
                            type : 'TIME',
                            data : time
                        })
                    }}
                />
            </div>
            <div>
                <h4>1차측정</h4>
                <BPrecordForm></BPrecordForm>
            </div>
            <div>
                <h4>2차측정</h4>
                <BPrecordForm></BPrecordForm>
            </div>
        </div>
    )
}

export default BPRecord;