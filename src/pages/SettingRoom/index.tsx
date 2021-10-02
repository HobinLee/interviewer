import { Question } from "../../store/question";
import { SettingRoomWrapper } from "./style";
import QuestionElement from "./Question";
import { useState } from "react";

const SettingRoom = () => {
  const [list, setList] = useState<Question[]>(['1번 문제', '2번 문제', '3번 문제', '4번 문제']);

  const modifyQuestion = (newQ: Question, i: number) => {
    const newList = list.map((q: Question, idx: number) => idx === i ? newQ : q);

    setList(newList);
  }

  const questionList = list.map((question: Question, i: number) => 
    <QuestionElement
      key={i + question}
      question={question}
      deleteQuestion={() => setList(list.filter(li => li !== question))}
      modifyQuestion={(newQ: Question) => modifyQuestion(newQ, i)}
    />);

  return <SettingRoomWrapper>
    <div className="setting-room">
      <ul>
        {questionList}
      </ul>
    </div>
  </SettingRoomWrapper>
}

export default SettingRoom;