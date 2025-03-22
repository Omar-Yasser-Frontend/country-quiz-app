import styles from "./QuestionsLen.module.css";
import LengthItem from "./LengthItem";
import { useQuizData } from "../context/QuizDataContext";

const length = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function QuestionsLen() {
  const { currQuestion } = useQuizData();
  return (
    <ul className={`${styles.list}`}>
      {length.map((_, i) => (
        <LengthItem key={_} index={i + 1} active={i < currQuestion} />
      ))}
    </ul>
  );
}

export default QuestionsLen;
