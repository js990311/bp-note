import './BPrecordForm.css'

const BPrecordForm = ({id, pressure, onUpdate}) => {
    const {systolic, diastolic} = pressure; 

    const onChange = (e) => {
        const {name, value} = e.target;
        onUpdate({
            ...pressure,
            [name] : value
        })
    }

    return (
        <div className="form">
            <h4>{id+1}차 측정</h4>
            <div className='bp-input'>
                <input type="text" 
                    name = "systolic"
                    value={systolic} 
                    onChange={onChange}
                />
                <span> / </span>
                <input 
                    type="text" 
                    name = "diastolic"
                    value={diastolic} 
                    onChange={onChange}
                />
                <button>
                    저장하기
                </button>
            </div>
        </div>
    )
}

export default BPrecordForm