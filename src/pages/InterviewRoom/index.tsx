import {useState } from "react";
import { Link } from "react-router-dom";
import { InterviewRoomWrapper } from "./style";
import { MdCallEnd } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import { Answer, answerState, Seconds, Question, questionState } from "../../store/question";

const MILLSEC_PER_SEC :number = 1000;

const InterviewRoom = () => {
  const questions = useRecoilValue<Question[]>(questionState);
  const [answerList, setAnswerList] = useRecoilState<Answer[]>(answerState);
  
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(new Date().getTime());

  const handelNextQuestion = () => {
    const now = new Date().getTime();


    const time: Seconds = (now - timer) / MILLSEC_PER_SEC;
    
    const answer: Answer = {
      question: questions[index],
      time
    }

    setAnswerList([...answerList, answer]);
    setIndex(index + 1);
    setTimer(now);
  }

  return <InterviewRoomWrapper>
    <div className="interviewers">
      <div className="interviewer">
        <div className="profile"></div>
        <h3 className="question">"{questions[index] ?? "고생하셨습니다"}"</h3>
      </div>
      <div className="interviewer">
        <div className="profile"></div>
      </div>
    </div>
    <div className="interviewee">
      <div className="profile"></div>
    </div>
    <div className="footer">
      {questions[index] ?
        <button className="next-button" onClick={handelNextQuestion}>
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