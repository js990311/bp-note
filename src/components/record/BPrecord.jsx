import { useState } from "react";
import BPrecordForm from "./form/BPrecordForm";
import Tab from "../global/tab/Tab";
import BPTimer from "./timer/BPTimer";

const BPRecord = () => {
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