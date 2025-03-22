import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import QuestionsProvider from "./context/QuestionsContext";
import QuizDataProvider from "./context/QuizDataContext";

function App() {
  return (
    <QuestionsProvider>
      <QuizDataProvider>
        <Main>
          <Header />
          <Quiz />
        </Main>
      </QuizDataProvider>
    </QuestionsProvider>
  );
}

export default App;
