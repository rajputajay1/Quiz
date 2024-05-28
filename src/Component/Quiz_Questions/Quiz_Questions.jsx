import React, { useState, useEffect } from 'react';
import './Quiz_Questions.css';

const Quiz_Questions = () => {
    const [questions] = useState([
        {
            id: 1,
            text: "Your question text comes here, it's a sample text.",
            options: [
                { type: 'text', content: 'Option 1' },
                { type: 'text', content: 'Option 2' },
                { type: 'text', content: 'Option 3' },
                { type: 'text', content: 'Option 4' },
            ]
        },
        {
            id: 2,
            text: "Another question text here.",
            options: [
                { type: 'image', content: './2.jpg' },
                { type: 'image', content: './2.jpg' },
                { type: 'image', content: './2.jpg' },
                { type: 'image', content: './2.jpg' },

            ]
        },
        // {
        //     id: 3,
        //     text: "Another question text here.",
        //     options: [
        //         { type: 'text', content: 'Option 1' },
        //         { type: 'text', content: 'Option 2' },
        //         { type: 'text', content: 'Option 3' },
        //         { type: 'text', content: 'Option 4' },
        //     ]
        // },
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(10);
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

    useEffect(() => {
        if (currentQuestionIndex === questions.length - 1 && timer === 0) {
            setAllQuestionsAnswered(true);
        } else {
            setAllQuestionsAnswered(false);
        }

        const countdown = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            } else {
                handleNext();
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [timer, currentQuestionIndex, questions]);

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimer(10);
        }
    };

    const { text, options } = questions[currentQuestionIndex];

    return (
        <>
            <div className='live_back'>
                <div className='main_live_div_question'>
                    <div className='time_question'>
                        <p className='total_ques'>{currentQuestionIndex + 1}/{questions.length}</p>
                        <p className='timer'>{`00:${timer < 10 ? '0' + timer : timer}s`}</p>
                    </div>
                    <p className='one_by_one_question'>{text}</p>
                    <div className='all_options'>
                        {options.map((option, index) => (
                            <div className='option' key={index}>
                                {option.type === 'text' && <p className='option_text'>{option.content}</p>}
                                {option.type === 'image' && <img src={option.content} alt={`Option ${index + 1}`} className='option_image' />}
                            </div>
                        ))}
                    </div>
                    <div className='next_button_container'>
                        <button className='next' onClick={handleNext}>
                            {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quiz_Questions;
