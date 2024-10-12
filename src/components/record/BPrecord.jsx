import InputDate from "../global/InputDate";
import InputTime from "../global/InputTime";
import BPrecordForm from "./BPrecordForm";
import Timer from "./Timer";

const BPRecord = () => {
    return (
        <div className="record">
            <Timer times={5*60}></Timer>
            <div>
                <InputDate 
                    onUpdate={(date)=>{
                        console.log(date);
                    }}
                />
                <InputTime 
                    onUpdate={(time)=>{
                        console.log(time);
                    }}
                />
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