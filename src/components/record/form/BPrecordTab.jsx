import { useState } from 'react';
import Tab from '../../global/tab/Tab';
import '../../global/tab/Tab.css';
import BPrecordForm from './BPrecordForm';

const BPrecordTab = () => {
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

    return (
        <div className="record">
            <Tab
                onCreate={createPressure}
                titles={
                    pressures.map((val, key) => (
                        `${key}차 측정`
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
    );
}

export default BPrecordTab;