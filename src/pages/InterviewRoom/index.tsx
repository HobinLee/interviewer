import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InterviewRoomWrapper } from "./style";
import { MdCallEnd } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import { Answer, answerState, Seconds, Question, questionState } from "../../store/question";
import QuestionBox from "./QuestionBox";

const MILLSEC_PER_SEC :number = 1000;

const InterviewRoom = () => {
  const questions = useRecoilValue<Question[]>(questionState);
  const [answerList, setAnswerList] = useRecoilState<Answer[]>(answerState);
  
  const [standby, setStandby] = useState(true);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(new Date().getTime());

  useEffect(() => {
    if (!standby) {
      setTimer(new Date().getTime());
      return;
    }
  }, [standby]);

  const handelNextQuestion = () => {
    const now = new Date().getTime();


    const time: Seconds = (now - timer) / MILLSEC_PER_SEC;
    
    const answer: Answer = {
      question: questions[index],
      time
    }

    setAnswerList([...answerList, answer]);
    setIndex(index + 1);
    setStandby(true);
  }

  return <InterviewRoomWrapper>
    <div className="interviewers">
      <div className="interviewer">
        <div className="profile"></div>
      </div>
      <div className="interviewer">
        <div className="profile"></div>
      </div>
    </div>
    {
      questions[index] ?
      <QuestionBox question={questions[index]} setStandby={setStandby} />
      :
      <h3>고생하셨습니다</h3>
    }
    <div className="interviewee">
      <div className="profile"></div>
    </div>
    <div className="footer">
      
      {questions[index] ?
        <button className="next-button" disabled={standby} onClick={handelNextQuestion}>
          <GrNext/>
        </button>
          :
        <Link className="review-button" to="/review">
          <AiOutlineFileSearch/>
        </Link>
      }
      <Link className="close-button" to="/">
        <MdCallEnd/>
      </Link>
    </div>
  </InterviewRoomWrapper>
}

export default InterviewRoom;