import { Link } from "react-router-dom";

const BPHome = () => {
    return (
        <div>
            <div>
                <h1>BP-Note</h1>
                <p>혈압측정을 위한 간단한 웹앱</p>
            </div>
            <div>
                <Link to="/record">측정하러 가기</Link>
            </div>
        </div>
    )
}

export default BPHome;