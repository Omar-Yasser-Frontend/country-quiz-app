import styles from "./Finish.module.css";
import { useQuizData } from "../context/QuizDataContext";
import { useQuestions } from "../context/QuestionsContext";
import { formatQuestions } from "../utils/helper";

function Finish() {
  const { points, resetQuiz } = useQuizData();
  const { resetQuestions } = useQuestions();
  return (
    <div className={styles.finish}>
      <div>
        <img src="/congrats.png" alt="" />
        <p>
          Congrats! you completed <br /> the quiz.
        </p>
        <p>you answerd {points}/10 correctly</p>
        <button
          onClick={() => {
            resetQuiz();
            resetQuestions();
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Finish;
