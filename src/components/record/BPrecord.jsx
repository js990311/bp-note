import BPrecordForm from "./BPrecordForm";

const BPRecord = () => {
    return (
        <div className="record">
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