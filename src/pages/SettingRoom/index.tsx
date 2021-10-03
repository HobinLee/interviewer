import { Question, QuestionSet, questionSetState } from "../../store/question";
import { SettingRoomWrapper } from "./style";
import QuestionElement from "./Question";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useInput } from "../../hooks";

const SettingRoom = () => {
  const {value: newQuestion, onChange, setValue} = useInput('');
  const questionSet: QuestionSet = useRecoilValue(questionSetState);
  const [list, setList] = useState<Question[]>(JSON.parse(localStorage.getItem(questionSet) ?? '[]'));

  useEffect(() => {
    localStorage.setItem(questionSet, JSON.stringify(list));
  }, [list]);

  const modifyQuestion = (newQ: Question, i: number) => {
    const newList = list.map((q: Question, idx: number) => idx === i ? newQ : q);

    setList(newList);
  }

  const handleAddQuestion = () => {
    setList([...list, newQuestion]);
    setValue('');
  }

  const questionList = list.map((question: Question, i: number) => 
    <QuestionElement
      key={i + question}
      question={question}
      deleteQuestion={() => setList(list.filter((_, idx) => i !== idx))}
      modifyQuestion={(newQ: Question) => modifyQuestion(newQ, i)}
    />);

  return <SettingRoomWrapper>
    <div className="setting-room">
      <ul>
        {questionList}
      </ul>
      <div className="setting-room__add-qestion-button">
        <input value={newQuestion} onChange={onChange} />
        <button onClick={handleAddQuestion}>추가하기</button>
      </div>
    </div>
  </SettingRoomWrapper>
}

export default SettingRoom;