import { atom, RecoilState } from "recoil";
import { questions } from "../questions";
import { shuffle, draw } from "../utils";

export type Question = string;

type MiddleQuestions = {
  essentials: Question[],
  rest: Question[]
}
 
const getQuestions = ({ essentials, rest }: MiddleQuestions): Question[] => {
    const QUESTION_COUNT = 15;
    const restCount = QUESTION_COUNT - essentials.length;

  const questions: Question[] = [...essentials, ...draw(rest, restCount)];

  return shuffle(questions);
}

export const questionState = atom<Question[]>({
  key: "question",
  default: [ ...questions.begin,
    ...getQuestions(questions.middle),
    ...questions.end ]
});

export type Seconds = number;

export type Answer = {
  question: Question,
  time: Seconds
}

export const answerState = atom<Answer[]>({
  key: "result",
  default: []
})