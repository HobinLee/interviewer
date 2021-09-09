import React, {useState, useEffect} from 'react';
import { questions } from '../questions';

const MILLSEC_PER_SEC :number = 1000;

export default () => {
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

  return <div>
    <h2>
      {restQuestions[0] ?? '고생하셨습니다!'}
    </h2>
    {restQuestions[0] && <button onClick={handelNextQuestion}>next</button>}
  </div>
}