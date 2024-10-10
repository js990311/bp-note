import BPrecordForm from "./BPrecordForm";
import Timer from "./Timer";

const BPRecord = () => {
    return (
        <div className="record">
            <div className="timer">
                <Timer times={10}></Timer>
            </div>
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