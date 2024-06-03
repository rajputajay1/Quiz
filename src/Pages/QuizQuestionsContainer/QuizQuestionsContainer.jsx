import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuestionHeader from "../../Component/QuizQuestionsComponent/QuestionHeader/index";
import QuestionText from "../../Component/QuizQuestionsComponent/QuestionText/index";
import OptionsContainer from "../../Component/QuizQuestionsComponent/OptionsContainer/index";
import NextButton from "../../Component/QuizQuestionsComponent/NextButton/index";
import "./QuizQuestionsContainer.css";
import { fetchGetData } from "../../api";

const QuizContainer = () => {
  const { id } = useParams(); // Get the quiz ID from the URL params
  const [quizDetail, setQuizDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const quizDetail = await fetchGetData(`/quiz/${id}`);
        setQuizDetail(quizDetail.data);
        setQuestions(quizDetail.data[0].questions); // Assuming questions are part of quizDetail.data
        console.log(quizDetail.data); //
        setLoading(false);
        toast.success("Quiz data loaded successfully!");
      } catch (error) {
        setLoading(false);
        toast.error("Failed to load quiz data.");
      }
    };
    fetchQuizData();
  }, []);

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    if (currentQuestion?.timer) {
      setTimer(currentQuestion.timer);
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
    console.log(score);

    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestionIndex].correctOption) {
        setScore(score + 1);
      }
    }
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

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (questions.length === 0) {
    return <div className="no-questions">No questions available.</div>;
  }

  if (allQuestionsAnswered) {
    return (
      <div className="results">All questions answered. Thank you!{score}</div>
    );
  }

  const { name, options } = questions[currentQuestionIndex] || {};

  return (
    <div className="quiz-container">
      {/* <ToastContainer /> */}
      <div className="sub-container">
        <QuestionHeader
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          timer={timer}
        />
        <QuestionText text={name} />
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
