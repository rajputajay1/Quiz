import React from 'react';
import "./Question_Analysis.css";
import Sidebar from '../sidebar/Sidebar';

const questionsData = [
    {
        question: "Q.1 Question place holder for analysis?",
        attempted: 60,
        correct: 38,
        incorrect: 22,
    },
    {
        question: "Q.2 Another question place holder for analysis?",
        attempted: 45,
        correct: 30,
        incorrect: 15,
    },
    // Add more questions as needed
];

const Question_Analysis = () => {
    return (
        <div className='questionAnalysisWidth'>
        <div className='background_color'>

            <div className='quiz_2_questions'>
                <p className='quiz_Questions_heading'>Quiz 2 Question Analysis</p>
                <div className='quiz_2_created'>
                    <p className='imp'>Created on: 04 Sep, 2023</p>
                    <p className='imp1'>Impressions: 667</p>
                </div>
            </div>
            <div className='questions_quiz_2'>
                {questionsData.map((questionData, index) => (
                    <div key={index} className='question_block'>
                        <p className='all_questions'>{questionData.question}</p>
                        <div className='answers'>
                            <div className='first_question'>
                                <p className='attempted'>{questionData.attempted}</p>
                                <p className='people_attempt'>people Attempted the question</p>
                            </div>
                            <div className='first_question'>
                                <p className='attempted'>{questionData.correct}</p>
                                <p className='people_attempt'>people Answered Correctly</p>
                            </div>
                            <div className='first_question'>
                                <p className='attempted'>{questionData.incorrect}</p>
                                <p className='people_attempt'>people Answered Incorrectly</p>
                            </div>
                        </div>
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

// import React from 'react';
// import "./Question_Analysis.css";
// import Sidebar from '../sidebar/Sidebar';

// const Question_Analysis = ({ type }) => {
//     // Data for quiz questions
//     const quizQuestions = [
//         {
//             question: "Q.1 Question place holder for analysis?",
//             attempted: 60,
//             correct: 38,
//             incorrect: 22,
//         },
//         // Add more quiz questions as needed
//     ];

//     // Data for poll questions
//     const pollQuestions = [
//         {
//             question: "Poll Question 1?",
//             options: [
//                 { option: "Option 1", answered: 15 },
//                 { option: "Option 2", answered: 20 },
//                 // Add more options as needed
//             ]
//         },
//         // Add more poll questions as needed
//     ];

//     const renderQuizAnalysis = () => {
//         return (
//             <div className='questions_quiz_2'>
//                 {quizQuestions.map((questionData, index) => (
//                     <div key={index} className='question_block'>
//                         <p className='all_questions'>{questionData.question}</p>
//                         <div className='answers'>
//                             <div className='first_question'>
//                                 <p className='attempted'>{questionData.attempted}</p>
//                                 <p className='people_attempt'>people Attempted the question</p>
//                             </div>
//                             <div className='first_question'>
//                                 <p className='attempted'>{questionData.correct}</p>
//                                 <p className='people_attempt'>people Answered Correctly</p>
//                             </div>
//                             <div className='first_question'>
//                                 <p className='attempted'>{questionData.incorrect}</p>
//                                 <p className='people_attempt'>people Answered Incorrectly</p>
//                             </div>
//                         </div>
//                         <br />
//                         <hr />
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     const renderPollAnalysis = () => {
//         return (
//             <div className='questions_poll'>
//                 {pollQuestions.map((questionData, index) => (
//                     <div key={index} className='question_block'>
//                         <p className='all_questions'>{questionData.question}</p>
//                         <div className='answers'>
//                             {questionData.options.map((option, index) => (
//                                 <div key={index} className='first_question'>
//                                     <p className='attempted'>{option.answered}</p>
//                                     <p className='people_attempt'>people Answered {option.option}</p>
//                                 </div>
//                             ))}
//                         </div>
//                         <br />
//                         <hr />
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div className='questionAnalysisWidth'>
//             <div className='background_color'>
//                 <div className='quiz_2_questions'>
//                     <p className='quiz_Questions_heading'>{type === 'quiz' ? 'Quiz' : 'Poll'} Question Analysis</p>
//                     <div className='quiz_2_created'>
//                         <p className='imp'>Created on: 04 Sep, 2023</p>
//                         <p className='imp1'>Impressions: 667</p>
//                     </div>
//                 </div>
//                 {type === 'quiz' && renderQuizAnalysis()}
//                 {type === 'poll' && renderPollAnalysis()}
//             </div>
//         </div>
//     );
// };

// export default Question_Analysis;

