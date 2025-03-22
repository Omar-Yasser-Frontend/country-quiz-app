import styles from "./Option.module.css";
import { useQuestions } from "../context/QuestionsContext";
import { useQuizData } from "../context/QuizDataContext";

function Option({ country, index }) {
  const { questions, setFinish }: any = useQuestions();
  const {
    currQuestion,
    setCurrAnswer,
    currAnswer,
    setCurrQuestion,
    plusOne,
  }: any = useQuizData();

  return (
    <button
      className={`${currAnswer === index ? styles.active : ""} ${
        styles.button
      }`}
      disabled={!!currAnswer}
      onClick={() => {
        if (currAnswer !== null) return;

        setCurrAnswer(index);

        if (index === questions[currQuestion - 1].chosenCountryIndex) plusOne();

        setTimeout(() => {
          if (currQuestion === 10) setFinish(true);
          else {
            setCurrAnswer(null);
            setCurrQuestion((index: number) => index + 1);
          }
        }, 1000);
      }}
    >
      {country.name.common}{" "}
      {currAnswer === index &&
      currAnswer !== questions[currQuestion - 1].chosenCountryIndex ? (
        <img src="/Close_round_fill.svg" />
      ) : null}
      {index === questions[currQuestion - 1].chosenCountryIndex &&
      currAnswer === index ? (
        <img src="/Check_round_fill.svg" />
      ) : null}
      {questions[currQuestion - 1].cca2}
    </button>
  );
}

export default Option;
