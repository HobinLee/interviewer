import { Link } from "react-router-dom";
import { WaitingRoomWrapper } from "./style";

const WaitingRoom = () => <WaitingRoomWrapper>
  <div className="waiting-room">
    <div className="waiting-room__camera"></div>
    <div className="waiting-room__start">
      <h3>참여할 준비가 되셨나요?</h3>
      <Link to="/interview">
        지금 참여하기
      </Link>
    </div>
  </div>
   
</WaitingRoomWrapper>

export default WaitingRoom;