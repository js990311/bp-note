import { useState } from 'react'
import './BPrecordForm.css'

const BPrecordForm = () => {
    const [input, setInput] = useState({
        systolic: '',
        diastolic : '',
    })

    const onUpdate = (e) => {
        const {name, value} = e.target;
        setInput({
            [name] : value,
            ...input
        })
    }

    return (
        <div className="form">
            <div className='bp-input'>
                <input type="text" 
                    name = "systolic"
                    value={input.systolic} 
                    onChange={onUpdate}
                />
                <span> / </span>
                <input 
                    type="text" 
                    name = "diastolic"
                    value={input.diastolic} 
                    onChange={onUpdate}
                />
                <button>
                    저장하기
                </button>
            </div>
        </div>
    )
}

export default BPrecordForm