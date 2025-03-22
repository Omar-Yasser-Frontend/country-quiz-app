import { useQuizData } from "../context/QuizDataContext";
import styles from "./Header.module.css";

function Header() {
  const { points }: any = useQuizData();
  return (
    <header className={`${styles.header}`}>
      <h1>Country Quiz</h1>
      <p>
        <span>🏆</span> <span>{points}/10 Points</span>
      </p>
    </header>
  );
}

export default Header;
