import { createContext, useContext, useEffect, useState } from "react";
import { formatQuestions } from "../utils/helper";
import Question from "../components/Question";

const QuestionContext = createContext({});

function QuestionsProvider({ children }: { children: React.ReactNode }) {
  const [countries, setCountries] = useState<any>(null);
  const [finish, setFinish] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [questions, setQuestions] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // dumb, i forgot that this is not stable i were have to use useRef or state but state is the right one
  // state will remove duplication of data that i made ones for questoins and one for data before
  // const questions = data ? formatQuestions(data) : undefined;

  function resetQuestions() {
    setQuestions(formatQuestions(countries));
    setFinish(false);
  }

  useEffect(function () {
    setIsLoading(true);
    async function getCountries() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?limit=10");
        if (!res.ok) throw new Error("Failed to get data");
        const data = await res.json();
        setCountries(data);
        const questions: any = formatQuestions(data);
        setQuestions(questions);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCountries();
  }, []);

  return (
    <QuestionContext
      value={{
        error,
        questions,
        isLoading,
        finish,
        setFinish,
        resetQuestions,
      }}
    >
      {children}
    </QuestionContext>
  );
}

export function useQuestions() {
  const context = useContext(QuestionContext);
  if (Question === undefined)
    throw new Error("don't use context out of it's scope");
  return context;
}

export default QuestionsProvider;
