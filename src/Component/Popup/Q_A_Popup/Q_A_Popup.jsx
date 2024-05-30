

import React, { useState } from 'react';
import './Q_A_Popup.css';
import CreateQuizPopup from '../CreateQuiz/CreatQuiz';
import Congrets from '../Congrets/Congrets';
const Q_A_Popup = ({ onClose, isQA }) => {
    const [selectedTimer, setSelectedTimer] = useState(null);
    const [optionType, setOptionType] = useState('text');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
    const options = [
        { id: 'option1', label: 'Text 1' },
        { id: 'option2', label: 'Text 2' },
        { id: 'option3', label: 'Text 3' },
        { id: 'option4', label: 'Text 4' },
    ];

    const handleTimerClick = (seconds) => {
        setSelectedTimer(seconds);
    };

    const handleOptionTypeChange = (type) => {
        setOptionType(type);
    };

    return (
        <div className="QA_popup">
            <div className="Qa_pop">
                <div className='add_btns_with_all_questions'>
                    <div className='all_circle_btns'>
                        <div className='question_circle_btn'>
                            <p className='circle_text'>1</p>
                            <img src="./cancle.svg" alt="" className='cancel_icon' />
                        </div>
                        <div className='question_circle_btn'>
                            <p className='circle_text'>2</p>
                            <img src="./cancle.svg" alt="" className='cancel_icon' />
                        </div>
                        <p className='add_more_btn'>+</p>
                    </div>
                    <p className='Qa_total_questions'>Max 5 questions</p>
                </div>
                <input
                    type="text"
                    placeholder={isQA ? 'QA Question' : 'Poll Question'}
                    className='Q_A_input'
                />
                <div className='choose_option_type'>
                    <p className='option_text'>Option Type</p>
                    <input
                        type="radio"
                        id="textOption"
                        name="optionType"
                        className="circle-checkbox"
                        onChange={() => handleOptionTypeChange('text')}
                    />
                    <label htmlFor="textOption">
                        <span className="checkbox-circle"></span>
                        <p className='option_text'>Text</p>
                    </label>

                    <input
                        type="radio"
                        id="checkboxOption"
                        name="optionType"
                        className="circle-checkbox"
                        onChange={() => handleOptionTypeChange('image')}
                    />
                    <label htmlFor="checkboxOption">
                        <span className="checkbox-circle"></span>
                        <p className='option_text'>Image URL</p>
                    </label>

                    <input
                        type="radio"
                        id="otherOption"
                        name="optionType"
                        className="circle-checkbox"
                        onChange={() => handleOptionTypeChange('textImage')}
                    />
                    <label htmlFor="otherOption">
                        <span className="checkbox-circle"></span>
                        <p className='option_text'>Text & Image URL</p>
                    </label>
                </div>

                <div className='options_qa'>
                    <div>
                        {options.map((option, index) => (
                            <div className='options_one' key={option.id}>
                                {optionType === 'text' && (
                                    <>
                                        <input type="radio" id={option.id} name="optionType" className="circle-checkbox" />
                                        <label htmlFor={option.id}>
                                            <span className="checkbox-circle"></span>
                                        </label>
                                        <button className='option_buttons_one'>{option.label}</button>
                                    </>
                                )}
                                {optionType === 'image' && (
                                    <>
                                        <input type="radio" id={option.id} name="optionType" className="circle-checkbox" />
                                        <label htmlFor={option.id}>
                                            <span className="checkbox-circle"></span>
                                        </label>
                                        <input type="text" placeholder="Image URL" className='option_input' />
                                    </>
                                )}
                                {optionType === 'textImage' && (
                                    <>
                                        <input type="radio" id={option.id} name="optionType" className="circle-checkbox" />
                                        <label htmlFor={option.id}>
                                            <span className="checkbox-circle"></span>
                                        </label>
                                        <button className='option_buttons_one'>{option.label}</button>
                                        <input type="text" placeholder="Image URL" className='option_input' />
                                    </>
                                )}
                                {index > 1 && <img src="./delete.svg" alt="Delete" className="delete_icon" />}
                            </div>
                        ))}
                    </div>

                    {isQA && (
                        <div className='time_qa'>
                            <p className='time_text_qa'>Timer</p>
                            <div className='timer_buttons_qa'>
                                <button
                                    className={`timer_button_qa ${selectedTimer === null ? 'selected' : ''}`}
                                    onClick={() => handleTimerClick(null)}
                                >
                                    Off
                                </button>
                                <button
                                    className={`timer_button_qa ${selectedTimer === 5 ? 'selected' : ''}`}
                                    onClick={() => handleTimerClick(5)}
                                >
                                    5 sec
                                </button>
                                <button
                                    className={`timer_button_qa ${selectedTimer === 10 ? 'selected' : ''}`}
                                    onClick={() => handleTimerClick(10)}
                                >
                                    10 sec
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className='qa_creat_quiz_btn'>
                    <button className='qa_creat_quiz_btn_cancel' onClick={onClose}>Cancel</button>
                    <button className='qa_creat_quiz_btn_cancel qa_creat_quiz_btn_continoue' onClick={handleOpenPopup}>Create Quiz</button>

                </div>
                {isPopupOpen && (
                    <Congrets
                        onClose={onClose}

                    />
                )}
            </div>
        </div>
    );
}

export default Q_A_Popup;
