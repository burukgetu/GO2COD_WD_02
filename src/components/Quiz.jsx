import React, { useState } from "react";
import Question from "./Question";

const Quiz = ({ questions, onScoreUpdate, onQuizEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    onScoreUpdate(isCorrect);
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      onQuizEnd();
    }
  };

  return (
    <div className="quiz-container">
      <Question
        question={questions[currentQuestionIndex]}
        onAnswerClick={handleAnswerClick}
      />
    </div>
  );
};

export default Quiz;
