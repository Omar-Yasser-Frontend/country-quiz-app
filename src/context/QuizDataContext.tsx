import { createContext, useContext, useState } from "react";
import Question from "../components/Question";

const QuizDataContext = createContext({});

function QuizDataProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState<number>(0);
  const [currQuestion, setCurrQuestion] = useState<number>(1);
  const [currAnswer, setCurrAnswer] = useState<number | null>(null);

  const plusOne = () => setPoints((points: number) => points + 1);

  function resetQuiz() {
    setPoints(0);
    setCurrAnswer(null);
    setCurrQuestion(1);
  }

  return (
    <QuizDataContext
      value={{
        points,
        plusOne,
        currQuestion,
        setCurrQuestion,
        currAnswer,
        setCurrAnswer,
        resetQuiz,
      }}
    >
      {children}
    </QuizDataContext>
  );
}

export function useQuizData() {
  const context = useContext(QuizDataContext);
  if (Question === undefined)
    throw new Error("don't use context out of it's scope");
  return context;
}

export default QuizDataProvider;
