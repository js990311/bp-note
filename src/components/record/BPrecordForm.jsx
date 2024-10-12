import { useEffect, useState } from 'react'
import './BPrecordForm.css'

const BPrecordForm = () => {
    const [systolic, setSystolic] = useState('');
    const [diastolic, setDiastolic] = useState('');
    return (
    <div className="form">
        <div className='bp-input'>
            <input type="text" value={systolic}/>
            <span> / </span>
            <input type="text" value={diastolic}/>
            <button>
                저장하기
            </button>
        </div>
    </div>)
}

export default BPrecordForm