import style from "styled-components";

export const QuestionElementWrapper = style.li`
  display: flex;
  flex-direction: row;
  jutify-content: flex-start;
  align-items: center;
  > button {
    height: 5rem;
    margin-left: 1rem;
  }
`