import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { questions } from "../../questions";
import { InterviewRoomWrapper } from "./style";
import { MdCallEnd } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { AiOutlineFileSearch } from "react-icons/ai";

const MILLSEC_PER_SEC :number = 1000;

const InterviewRoom = () => {
  const [restQuestions, setRestQuestions] = useState(questions);
  const [questionList, setQuestionList] = useState<string[]>([]);
  const [timer, setTimer] = useState(new Date().getTime());
  const handelNextQuestion = () => {
    const now = new Date().getTime();

    const q: string | undefined = restQuestions.shift();
    q && setQuestionList([...questionList, q]);
    setRestQuestions(restQuestions);
    console.log(`Q. ${q}`, `${(now - timer)/MILLSEC_PER_SEC}초`);

    setTimer(now);
  }

  return <InterviewRoomWrapper>
    <div className="interviewers">
      <div className="interviewer">
        <div className="profile"></div>
        <h3 className="question">"{restQuestions[0] ?? "고생하셨습니다"}"</h3>
      </div>
      <div className="interviewer">
        <div className="profile"></div>
      </div>
    </div>
    <div className="interviewee">
      <div className="profile"></div>
    </div>
    <div className="footer">
      {restQuestions[0] ?
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