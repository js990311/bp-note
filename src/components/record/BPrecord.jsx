import { useState } from "react";
import BPrecordForm from "./form/BPrecordForm";

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


    return (
        <div className="record">
            <div>
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
            </div>
        </div>
    )
}

export default BPRecord;