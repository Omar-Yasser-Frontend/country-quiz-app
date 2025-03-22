import { useQuestions } from "../context/QuestionsContext";
import { useQuizData } from "../context/QuizDataContext";
import Answers from "./Answers";
import styles from "./Question.module.css";

function Question() {
  const { questions }: any = useQuestions();
  const { currQuestion }: any = useQuizData();
  return (
    <div className={`${styles.question}`}>
      <p>{questions[currQuestion - 1].question}</p>

      <Answers />
    </div>
  );
}

export default Question;
