import { atom, RecoilState } from "recoil";
import { questions } from "../questions";
import { shuffle } from "../utils";

export type Question = string;

export const questionState = atom<Question[]>({
  key: "question",
  default: shuffle<Question>(questions)
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