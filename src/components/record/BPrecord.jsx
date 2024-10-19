import { useState } from "react";
import BPrecordForm from "./form/BPrecordForm";
import Tab from "../global/tab/Tab";
import BPTimer from "./timer/BPTimer";
import InputDate from "../global/input/InputDate";
import InputTime from "../global/input/InputTime";

const BPRecord = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const onChangeDate = (date) =>{
        setDate(date);
    }

    const onChangeTime = (time) => {
        setTime(time);
    }

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


    return (
        <div className="record">
            <BPTimer></BPTimer>
            <div>
                <InputDate
                    value={date}
                    onChange={onChangeDate}
                ></InputDate>
                <InputTime
                    value={time}
                    onChange={onChangeTime}
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
        </div>
    )
}

export default BPRecord;