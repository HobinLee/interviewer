import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Answer, answerState } from "../../store/question";
import { ReviewRoomWrapper } from "./style";

const ReviewRoom = () => {
  const answers: Answer[] = useRecoilValue<Answer[]>(answerState);

  const answerList = answers.map((answer, idx) => <li key={idx}>
    <span>
      <strong>{answer.question}</strong>
      ({answer.time}')
    </span>
  </li>);

  return (
    <ReviewRoomWrapper>
      <h3>Review</h3>
      <ul>
        {answerList}
      </ul>
      <Link to="/">
        again
      </Link>
    </ReviewRoomWrapper>
  )
}

export default ReviewRoom;