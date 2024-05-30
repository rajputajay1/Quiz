import React, { useState, useEffect } from "react";
import QuestionHeader from "../../Component/QuizQuestionsComponent/QuestionHeader/index";
import QuestionText from "../../Component/QuizQuestionsComponent/QuestionText/index";
import OptionsContainer from "../../Component/QuizQuestionsComponent/OptionsContainer/index";
import NextButton from "../../Component/QuizQuestionsComponent/NextButton/index";
import "./QuizQuestionsContainer.css";

const QuizContainer = () => {
  const [questions] = useState([
    {
      id: 1,
      text: "Your question text comes here, it's a sample text.",
      options: [
        { type: "text", content: "Optiodecdjencjnedjcndejcnjdncjdncjdncjndjcndjn 1" },
        { type: "text", content: "Option 2" },
        { type: "text", content: "Option 3" },
        { type: "text", content: "Option 4" },
      ],
      hasTimer: false,
      timerDuration: 10,
    },
    {
      id: 2,
      text: "Another question text here.",
      options: [
        { type: "image", content: "./2.jpg" },
        { type: "image", content: "./2.jpg" },
        { type: "image", content: "./2.jpg" },
        { type: "image", content: "./2.jpg" },
      ],
      hasTimer: false,
    },
    {
      id: 3,
      text: "Yet another question with text and image options.",
      options: [
        { type: "text", content: "Option 1" },
        { type: "image", content: "./3.jpg" },
        { type: "text", content: "Option 3" },
        { type: "image", content: "./4.jpg" },
      ],
      hasTimer: true,
      timerDuration: 15,
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.hasTimer) {
      setTimer(currentQuestion.timerDuration);
    } else {
      setTimer(null);
    }
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    let countdown;
    if (timer !== null && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      handleNext();
    }

    return () => clearInterval(countdown);
  }, [timer]);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setAllQuestionsAnswered(true);
    }
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  if (allQuestionsAnswered) {
    return <div className="results">All questions answered. Thank you!</div>;
  }

  const { text, options } = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="sub-container">
        <QuestionHeader
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          timer={timer}
        />
        <QuestionText text={text} />
        <OptionsContainer
          options={options}
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
        <NextButton
          handleNext={handleNext}
          isLastQuestion={currentQuestionIndex === questions.length - 1}
        />
      </div>
    </div>
  );
};

export default QuizContainer;
