import { useParams } from "react-router-dom";

const TodayRecord = () => {
    const {date} = useParams();

    return (
        <div>
            {date}
        </div>
    );
}

export default TodayRecord;