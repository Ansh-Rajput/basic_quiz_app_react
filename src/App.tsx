import { useState } from "react";
import "./App.css";
import Question from "./components/Question";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O",
    },
    {
      question: "Which programming language is used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
  ];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartGame = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md w-full sm:max-w-md">
          <h1 className="text-2xl md:text-5xl font-bold">Quiz Game</h1>
          {!showScore ? (
            <Question
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              onSelectOption={handleOptionSelect}
              selectedOption={selectedOption}
            />
          ) : (
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-2xl mb-4">
                Your Score: {score}/{questions.length}
              </h2>
              <button
                onClick={handleRestartGame}
                className="mt-4 m-auto p-2 bg-blue-500 text-white rounded-md"
              >
                Restart Game
              </button>
            </div>
          )}
          {!showScore && (
            <button
              onClick={handleNextQuestion}
              className="mt-4 p-2 bg-blue-500 text-white rounded-md w-full"
            >
              {currentQuestion < questions.length - 1
                ? "Next Question"
                : "Show Score"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
