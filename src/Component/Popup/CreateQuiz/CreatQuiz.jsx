import React, { useState } from 'react';
import "./Create.css";
import Q_A_Popup from '../Q_A_Popup/Q_A_Popup';
const CreateQuizPopup = ({ onClose }) => {
    const [activeButton, setActiveButton] = useState('');
    const [isAdditionalPopupVisible, setIsAdditionalPopupVisible] = useState(false);

    const handleButtonClick = (type) => {
        setActiveButton(type);
    };

    const handleContinueClick = () => {
        setIsAdditionalPopupVisible(true);
    };

    const handleAdditionalPopupClose = () => {
        setIsAdditionalPopupVisible(false);
    };

    return (
        <div>
            <div className="popup_creat">
                <div className="popup_conten_creat">
                    <input
                        type="text"
                        placeholder='Quiz name'
                        className='create_input'
                    />
                
                
                    <div className='both_type_quiz'>
                        <p className='quiz_type'>Quiz Type</p>
                        <div className='types_quiz'>
                            <button
                                className={`type_1 ${activeButton === 'qa' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('qa')}
                            >
                                Q & A
                            </button>
                        </div>
                        <div className='types_quiz'>
                            <button
                                className={`type_1 ${activeButton === 'poll' ? 'active' : ''}`}
                                onClick={() => handleButtonClick('poll')}
                            >
                                Poll Type
                            </button>
                        </div>
                    </div>
                    <div className='continoue'>
                        <button className='cancle_btn' onClick={onClose}>Cancel</button>
                        <button className='cancle_btn contionue_btn' onClick={handleContinueClick}>Continue</button>
                    </div>
                </div>
            </div>

            {isAdditionalPopupVisible && <Q_A_Popup onClose={handleAdditionalPopupClose} />}
        </div>
    );
};

export default CreateQuizPopup;
