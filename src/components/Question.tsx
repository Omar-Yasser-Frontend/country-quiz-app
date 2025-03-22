import { useQuestions } from "../context/QuestionsContext";
import { useQuizData } from "../context/QuizDataContext";
import Answers from "./Answers";
import styles from "./Question.module.css";

function Question() {
  const { questions } = useQuestions();
  const { currQuestion } = useQuizData();
  return (
    <div className={`${styles.question}`}>
      <p>{questions[currQuestion - 1].question}</p>

      <Answers />
    </div>
  );
}

export default Question;
