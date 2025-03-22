import { useQuestions } from "../context/QuestionsContext";
import { useQuizData } from "../context/QuizDataContext";
import styles from "./Aswers.module.css";
import Option from "./Option";

function Answers() {
  const { questions } = useQuestions();
  const { currQuestion } = useQuizData();

  return (
    <div className={`${styles.answer}`}>
      {questions[currQuestion - 1].countries.map((country, i: number) => (
        <Option country={country} index={i} key={i} />
      ))}
    </div>
  );
}

export default Answers;
