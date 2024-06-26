import React from "react";
import "./Question_Analysis.css";
import Sidebar from "../sidebar/Sidebar";

const questionsData = [
  {
    question: "Q.1 Question place holder for analysis?",
    attempted: 60,
    correct: 38,
    incorrect: 22,
    options: [
      { optionText: "Option A", count: 20 },
      { optionText: "Option B", count: 40 },
    ],
  },
  {
    question: "Q.2 Another question place holder for analysis?",
    attempted: 45,
    correct: 30,
    incorrect: 15,
    options: [
      { optionText: "Option A", count: 10 },
      { optionText: "Option B", count: 25 },
      { optionText: "Option C", count: 10 },
    ],
  },
  // Add more questions as needed
];

const Question_Analysis = ({ selectedQuiz }) => {
  console.log(selectedQuiz);
  const quizType = selectedQuiz.quiz_type;

  return (
    <div className="questionAnalysisWidth">
      <div className="background_color">
        <div className="quiz_2_questions">
          <p className="quiz_Questions_heading">Quiz 2 Question Analysis</p>
          <div className="quiz_2_created">
            <p className="imp">Created on: 04 Sep, 2023</p>
            <p className="imp1">Impressions: 667</p>
          </div>
        </div>
        <div className="questions_quiz_2">
          {selectedQuiz.quizStat?.map((questionData, index) => (
            <div key={index} className="question_block">
              <p className="all_questions">{`Q${index+1} `}{questionData.question_name}</p>
              {quizType === "Q&A" ? (
                <div className="answers">
                  <div className="first_question">
                    <p className="attempted">{questionData.attended}</p>
                    <p className="people_attempt">
                      people Attempted the question
                    </p>
                  </div>
                  <div className="first_question">
                    <p className="attempted">{questionData.correct}</p>
                    <p className="people_attempt">people Answered Correctly</p>
                  </div>
                  <div className="first_question">
                    <p className="attempted">{questionData.wrong
}</p>
                    <p className="people_attempt">
                      people Answered Incorrectly
                    </p>
                  </div>
                </div>
              ) : (
                <div className="answers">
                  {questionData.options.map((option, optIndex) => (
                    <div key={optIndex} className="pollQuestion">
                      <p className="attempted">{option.count}</p>
                      <p className="people_attempt">{option.option_title}</p>
                    </div>
                  ))}
                </div>
              )}
              <br />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question_Analysis;
