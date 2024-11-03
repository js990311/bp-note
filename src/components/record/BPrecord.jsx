import { useContext, useState } from "react";
import BPrecordForm from "./form/BPrecordForm";
import Tab from "../global/tab/Tab";
import BPTimer from "./timer/BPTimer";
import InputDate from "../global/input/InputDate";
import InputTime from "../global/input/InputTime";
import { Link, useParams } from "react-router-dom";
import { RecordsContext } from "../record-context/BpRecordContext";

const BPRecord = () => {
    const {date, ampm} = useParams();
    const [time, setTime] = useState('');
    const {addData} = useContext(RecordsContext);

    const [pressures, setPressures] = useState([
        {
            systolic : '',
            diastolic : ''
        },
        {
            systolic : '',
            diastolic : ''
        }
    ]);

    const updatePressure = (pressure, index) => {
        console.log(pressure, index);
        let newPressures = pressures.map((p, i) => i === index ? pressure : p);
        setPressures(newPressures);
    }

    const createPressure = () => {
        setPressures(prev=>(
            [
                ...prev,
                {
                    systolic : '',
                    diastolic : ''
                }
            ]
        ))
    }

    const deletePressure = (index) => {
        setPressures(prev=>(
            prev.filter((val, key) => (key!==index))
        ));
    }

    const saveDate = () => {
        console.log('save data');
        addData({
            time: time,
            pressures : pressures
        },{
            date: date, 
            am : ampm === 'am'
        });
    }


    return (
        <div className="record">
            <BPTimer></BPTimer>
            <div>
                <InputTime
                    name={'time'}
                    value={time}
                    onChange={({name, value})=>{setTime(value)}}
                ></InputTime>
                <Tab
                    onCreate={createPressure}
                    onDelete={deletePressure}
                    titles={
                        pressures.map((val, key) => (
                            `${key+1}차 측정`
                        ))
                    }
                >
                    {pressures.map(
                        (pressure, index) => (
                            <BPrecordForm
                                key={index}
                                id={index}
                                pressure={pressure}
                                onUpdate={(newPressure)=>{
                                    updatePressure(newPressure, index)
                                }}
                            />
                        )
                    )}
                </Tab>
            </div>
            <button onClick={saveDate}>
                측정완료
            </button>
            <Link to={`/day/${date}`}>오늘기록보기</Link>
        </div>
    )
}

export default BPRecord;