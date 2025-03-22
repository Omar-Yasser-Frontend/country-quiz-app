import { useQuestions } from "../context/QuestionsContext";
import ErrorPage from "./ErrorPage";
import Finish from "./Finish";
import styles from "./Main.module.css";

function Main({ children }: { children: React.ReactNode }) {
  const { isLoading, questions, currQuestion, finish, error } = useQuestions();

  if (isLoading || !questions) return <p>LOADING DATA...</p>;


  if (error) return <ErrorPage />;

  if (finish) return <Finish />;

  return (
    <main className={`${styles.main}`}>
      {currQuestion < questions.length ? (
        <p>congrats</p>
      ) : (
        <div className={`${styles.container}`}>{children}</div>
      )}
    </main>
  );
}

export default Main;
