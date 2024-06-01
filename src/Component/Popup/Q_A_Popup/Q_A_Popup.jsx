import React, { useState } from 'react';
import './Q_A_Popup.css';
import Congrets from '../Congrets/Congrets';

const Q_A_Popup = ({ onClose, isQA }) => {
    const [selectedTimer, setSelectedTimer] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [questions, setQuestions] = useState([{ text: '', optionType: 'text', options: ['', ''], correctOption: null }]);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const [validationErrors, setValidationErrors] = useState([]);

    const addQuestion = () => {
        if (questions.length < 5) {
            const newQuestion = { text: '', optionType: 'text', options: ['', ''], correctOption: null };
            setQuestions([...questions, newQuestion]);
        }
    };

    const deleteQuestion = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
        if (selectedQuestionIndex >= index) {
            setSelectedQuestionIndex(Math.max(selectedQuestionIndex - 1, 0));
        }
    };

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);
    const handleTimerClick = (seconds) => setSelectedTimer(seconds);

    const updateQuestionField = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(updatedQuestions);
    };

    const addOption = (index) => {
        const updatedQuestions = [...questions];
        if (updatedQuestions[index].options.length < 4) {
            updatedQuestions[index].options.push('');
            setQuestions(updatedQuestions);
        }
    };

    const deleteOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options.splice(optionIndex, 1);
        setQuestions(updatedQuestions);
    };

    const setCorrectOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].correctOption = optionIndex;
        setQuestions(updatedQuestions);
    };




    const validateQuestions = () => {
        const errors = [];
        questions.forEach((question, index) => {
            if (!question.text) {
                errors.push({ index, field: 'text', message: 'Question is required.' });
            }
            if (question.options.some(option => !option)) {
                errors.push({ index, field: 'options', message: 'All options are required.' });
            }
            if (isQA && question.correctOption === null) {
                errors.push({ index, field: 'correctOption', message: 'Correct option is required.' });
            }
        });
        setValidationErrors(errors);
        return errors.length === 0;
    };

    const handleCreateQuiz = () => {
        if (validateQuestions()) {
            handleOpenPopup();
        } else {
            const firstError = validationErrors[0];
            setSelectedQuestionIndex(firstError.index);
        }
        console.log(questions)
    };

    const selectedQuestion = questions[selectedQuestionIndex];

    const renderOptions = (option, optionIndex) => {
        let placeholder = "";
        if (selectedQuestion.optionType === 'image') {
            placeholder = "Image URL";
        }

        const error = validationErrors.find(err => err.index === selectedQuestionIndex && err.field === 'options');

        return (
            <div className={`options_one ${selectedQuestion.correctOption === optionIndex ? 'Rohit' : ''}`} key={optionIndex}>
                {isQA && (
                    <input
                        type="radio"
                        id={`option${optionIndex}`}
                        name="correctOption"
                        className="circle-checkbox"
                        checked={selectedQuestion.correctOption === optionIndex}
                        onChange={() => setCorrectOption(selectedQuestionIndex, optionIndex)}
                    />
                )}
                {/* {!isQA && (
                    <input
                        type="radio"
                        id={`option${optionIndex}`}
                        name="optionType"
                        className="circle-checkbox"
                    />
                )} */}
                <label htmlFor={`option${optionIndex}`}>
                    <span className="checkbox-circle"></span>
                </label>
                <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(selectedQuestionIndex, optionIndex, e.target.value)}
                    placeholder={placeholder}
                    className={`option_input ${error ? 'error' : ''}`}
                />
                {selectedQuestion.optionType === 'textImage' && (
                    <input type="text" placeholder="Image URL" className='option_input' />
                )}
                {optionIndex > 1 && (
                    <button className="delete_icon" onClick={() => deleteOption(selectedQuestionIndex, optionIndex)}>
                        <img src="./delete.svg" alt="Delete" />
                    </button>
                )}
                {/* {error && (
                    <div className="error_message">{error.message}</div>
                )} */}
            </div>
        );
    };

    const renderError = (field) => {
        const error = validationErrors.find(err => err.index === selectedQuestionIndex && err.field === field);
        return error ? <div className="error_message">{error.message}</div> : null;
    };

    return (
        <div className="QA_popup">
            <div className="Qa_pop">
                <div className='add_btns_with_all_questions'>
                    <div className='all_circle_btns'>
                        {questions.map((question, index) => (
                            <div
                                key={index}
                                className={`question_circle_btn ${index === selectedQuestionIndex ? 'selected' : ''}`}
                                onClick={() => setSelectedQuestionIndex(index)}
                            >
                                <p className='circle_text'>{index + 1}</p>
                                {questions.length > 1 && (
                                    <img
                                        src="./cancle.svg"
                                        alt="Delete"
                                        className="cancel_icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteQuestion(index);
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                        {questions.length < 5 && (
                            <p className='add_more_btn' onClick={addQuestion}>+</p>
                        )}
                    </div>
                    <p className='Qa_total_questions'>Max 5 questions</p>
                </div>
                <input
                    type="text"
                    value={selectedQuestion.text}
                    onChange={(e) => updateQuestionField(selectedQuestionIndex, 'text', e.target.value)}
                    placeholder={isQA ? 'QA Question' : 'Poll Question'}
                    className={`Q_A_input ${validationErrors.find(err => err.index === selectedQuestionIndex && err.field === 'text') ? 'error' : ''}`}
                />
                {renderError('text')}
                <div className='choose_option_type'>
                    <p className='option_text'>Option Type</p>
                    {['text', 'image', 'textImage'].map(type => (
                        <React.Fragment key={type}>
                            <input
                                type="radio"
                                id={`${type}Option`}
                                name="optionType"
                                checked={selectedQuestion.optionType === type}
                                className="circle-checkbox"
                                onChange={() => updateQuestionField(selectedQuestionIndex, 'optionType', type)}
                            />
                            <label htmlFor={`${type}Option`}>
                                <span className="checkbox-circle"></span>
                                <p className='option_text'>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                            </label>
                        </React.Fragment>
                    ))}
                </div>
                {isQA && renderError('correctOption')}
                {renderError('options')}

                <div className='options_qa'>

                    <div className='allOptions'>
                        {selectedQuestion.options.map(renderOptions)}
                        {selectedQuestion.options.length < 4 && (
                            <button className={`qa_creat_quiz_btn_cancel ${isQA ? 'addoption' : 'addoptionset'}`} onClick={() => addOption(selectedQuestionIndex)}>Add Option</button>
                        )}
                    </div>
                    {isQA && (
                        <div className='time_qa'>
                            <p className='time_text_qa'>Timer</p>
                            <div className='timer_buttons_qa'>
                                {[null, 5, 10].map(time => (
                                    <button
                                        key={time}
                                        className={`timer_button_qa ${selectedTimer === time ? 'selected' : ''}`}
                                        onClick={() => handleTimerClick(time)}
                                    >
                                        {time === null ? 'Off' : `${time} sec`}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className='qa_creat_quiz_btn'>
                    <button className='qa_creat_quiz_btn_cancel' onClick={onClose}>Cancel</button>
                    <button className='qa_creat_quiz_btn_cancel qa_creat_quiz_btn_continoue' onClick={handleCreateQuiz}>Create Quiz</button>
                </div>
                {isPopupOpen && (
                    <Congrets onClose={onClose} />
                )}
                {/* {console.log(questions)} */}
            </div>
        </div>
    );
}

export default Q_A_Popup;

