import { useState } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "Which of the following command is used to create react-js-app ?",
      answers: [{ text: "npx install create-react-app -g" }, 
      { text: "install - l create-react-app" }, 
      { text: "npm install create-react-app" },
      { text: "npx create-react-app appname", isCorrect: true }],
    },
    {
      question: "In React.js which one of the following is used to create a class for Inheritance ?",
      answers: [
        { text: "Create" },
        { text: "Extends", isCorrect: true },
        { text: "Delete" },
        { text: "Inherits" },
      ],
    },
    {
      question: "What is the default port number in which the application run ?",
      answers: [
        { text: "5000" },
        { text: "3030" },
        { text: "8080" },
        { text: "3000", isCorrect: true },
      ],
    },
    {
      question: "Which of the following is a way to handle data in React.js ?",
      answers: [
        { text: "Services & Components" },
        { text: "State & Props", isCorrect: true },
        { text: "State & Services" },
        { text: "State & Component" },
      ],
    },
    {
      question: "In React.js, how we can pass the data from one component to another in React.js ?",
      answers: [
        { text: "Props", isCorrect: true },
        { text: "SetState" },
        { text: "Render with arguments" },
        { text: "PropTypes" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // check score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  return (
    <div className="App">
      <h3>QUIZ APP</h3>
      {isQuizOver ? (
        <ScoreView handleResetClick={handleResetClick} score={score} />
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;