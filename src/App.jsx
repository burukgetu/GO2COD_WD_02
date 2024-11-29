import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import questions from "./questions";

const App = () => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleScoreUpdate = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
  };

  const handleQuizEnd = () => {
    setShowResult(true);
  };

  return (
    <div className="App">
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Quiz
          questions={questions}
          onScoreUpdate={handleScoreUpdate}
          onQuizEnd={handleQuizEnd}
        />
      )}
    </div>
  );
};

export default App;
