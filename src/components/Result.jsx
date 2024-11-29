import React from "react";

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result-container">
      <h1>Quiz Completed!</h1>
      <p>
        Your Score: {score} / {totalQuestions}
      </p>
      <button onClick={() => window.location.reload()}>Retake Quiz</button>
    </div>
  );
};

export default Result;
