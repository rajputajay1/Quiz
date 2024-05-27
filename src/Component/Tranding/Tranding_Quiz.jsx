import React from 'react';
import "./Tranding_Quiz.css";

const Tranding_Quiz = () => {
  const quizzes = [
    { id: 1, name: "Quiz 1", views: 667, createdDate: "04 Sep, 2023" },
    { id: 2, name: "Quiz 2", views: 345, createdDate: "12 Oct, 2023" },
    { id: 3, name: "Quiz 3", views: 789, createdDate: "23 Nov, 2023" },
    { id: 3, name: "Quiz 3", views: 789, createdDate: "23 Nov, 2023" },
    { id: 3, name: "Quiz 3", views: 789, createdDate: "23 Nov, 2023" },
    { id: 3, name: "Quiz 3", views: 789, createdDate: "23 Nov, 2023" },
    { id: 3, name: "Quiz 3", views: 789, createdDate: "23 Nov, 2023" },
    { id: 3, name: "Quiz 3", views: 789, createdDate: "23 Nov, 2023" },
    { id: 3, name: "Quiz 3", views: 789, createdDate: "23 Nov, 2023" },
    { id: 3, name: "Quiz 3", views: 789, createdDate: "23 Nov, 2023" },
    { id: 3, name: "Quiz 3", views: 789, createdDate: "23 Nov, 2023" },
    { id: 3, name: "Quiz 3", views: 789, createdDate: "23 Nov, 2023" },
  ];

  return (
    <>
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
    </>
  );
};

export default Tranding_Quiz;
