import React from 'react';
import "./Tranding_Quiz.css";

const Tranding_Quiz = ({quizzes}) => {
 

  return (
    <>
      <div className='ajay'>

     
      <p className='tranding_quiz'>Trending Quizzes</p>
      <div className='grid_quiz'>
        {quizzes.map(quiz => (
          <div className='main_quizdiv' key={quiz.id}>
            <div className='allQuiz_div'>
              <p className='Quiz_text'>{quiz.name}</p>
              <p className='quiz_numeric'>
                {quiz.views} <span><img src="./eye.svg" alt="views" /></span>
              </p>
            </div>
            <p className='created_date'>Created on: {quiz.createdDate}</p>
          </div>
        ))}
        </div>
        </div>
    </>
  );
};

export default Tranding_Quiz;
