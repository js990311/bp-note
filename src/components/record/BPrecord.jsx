import { useState } from "react";
import BPrecordForm from "./form/BPrecordForm";
import Tab from "../global/tab/Tab";
import BPTimer from "./timer/BPTimer";
import InputDate from "../global/input/InputDate";
import InputTime from "../global/input/InputTime";
import { useParams } from "react-router-dom";

const BPRecord = () => {
    const {date, ampm} = useParams();
    const [dateTime, setDateTime] = useState({
        date : date,
        time : ''
    });

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

    const onChangeDateTime = ({name, value}) => {
        setDateTime({
            [name] : value, 
            ...dateTime
        })
    }

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
                    name={'date'}
                    value={dateTime.date}
                    onChange={onChangeDateTime}
                ></InputDate>
                <InputTime
                    name={'time'}
                    value={dateTime.time}
                    onChange={onChangeDateTime}
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
            <button>
                측정완료
            </button>
        </div>
    )
}

export default BPRecord;