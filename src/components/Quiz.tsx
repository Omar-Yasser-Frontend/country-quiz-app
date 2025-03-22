import Question from "./Question";
import QuestionsLen from "./Questionslen";
import styles from "./Quiz.module.css";

function Quiz() {
  return (
    <section className={`${styles.quiz}`}>
      <QuestionsLen />
      <Question />
    </section>
  );
}

export default Quiz;
