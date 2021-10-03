import { SettingRoomWrapper } from "./style";
import QuestionList from "./QuestionList";

const SettingRoom = () => {

  return <SettingRoomWrapper>
    <div className="setting-room">
      <QuestionList type="begin"/>
      <QuestionList type="essential"/>
      <QuestionList type="random"/>
      <QuestionList type="end"/>
    </div>
  </SettingRoomWrapper>
}

export default SettingRoom;