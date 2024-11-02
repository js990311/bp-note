const TodayBp = ({record, am, pm}) => {
    const isAm = am===true ? true : false;
    return (
        <div>
            <span>
                {   
                    isAm 
                    ? "오전"
                    : "오후"
                }
            </span>
            <span>측정시간</span>
            <span>{record.time}</span>
            <div>
                <span>수축기(최대혈압)</span>
                <div>{record.systolic}</div>
            </div>
            <div>
                <span>이완기(최소혈압)</span>
                <div>{record.diastolic}</div>
            </div>
        </div>
    )
}

export default TodayBp;