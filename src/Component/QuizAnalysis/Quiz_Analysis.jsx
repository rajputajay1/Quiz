import React, { useState, useEffect } from 'react';
import './Quiz_Analysis.css';

const Quiz_Analysis = () => {
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showSharePopup, setShowSharePopup] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    const quizzes = [
        { id: 1, name: 'Quiz 1', createdOn: '3 Sep, 2023', impressions: 123 },
        { id: 2, name: 'Quiz 2', createdOn: '6 Sep, 2023', impressions: 456 },
        { id: 3, name: 'Quiz 3', createdOn: '8 Sep, 2023', impressions: 789 },
        { id: 4, name: 'Quiz 4', createdOn: '19 Sep, 2023', impressions: 101 },
        { id: 5, name: 'Quiz 5', createdOn: '12 Sep, 2023', impressions: 112 },
        { id: 6, name: 'Quiz 6', createdOn: '15 Sep, 2023', impressions: 131 },
        { id: 7, name: 'Quiz 7', createdOn: '18 Sep, 2023', impressions: 145 },
        { id: 8, name: 'Quiz 8', createdOn: '21 Sep, 2023', impressions: 167 },
    ];

    const handleDeleteClick = (quiz) => {
        setSelectedQuiz(quiz);
        setShowDeletePopup(true);
    };

    const handleShareClick = (quiz) => {
        setSelectedQuiz(quiz);
        setShowSharePopup(true);
        setTimeout(closeSharePopup, 2000); // Close after 3 seconds
    };

    const closeDeletePopup = () => {
        setShowDeletePopup(false);
    };

    const closeSharePopup = () => {
        setShowSharePopup(false);
    };

    const deleteQuiz = () => {
        closeDeletePopup();
    };

    // const copyLink = () => {
    //     const link = `https://example.com/quiz/${selectedQuiz.id}`;
    //     navigator.clipboard.writeText(link);
    //     alert('Link copied to clipboard');
    // };

    return (
        <>
            <div className='quiz_analysis_width'>
                <p className="quiz_analysis">Quiz Analysis</p>
                <div className="table">
                    <div className="table_heading">
                        <div className="all_headings">
                            <p>S.No</p>
                            <p>Quiz Name</p>
                            <p>Created on</p>
                            <p>Impressions</p>
                        </div>
                    </div>
                    <div className="table_body">
                        {quizzes.map((quiz, index) => (
                            <div className="table_row" key={quiz.id}>
                                <p>{index + 1}</p>
                                <p>{quiz.name}</p>
                                <p>{quiz.createdOn}</p>
                                <p>{quiz.impressions}</p>
                                <div className="actions">
                                    <p><img src="./edit1.svg" alt="Edit" /></p>
                                    <p><img src="./delete.svg" alt="Delete" onClick={() => handleDeleteClick(quiz)} /></p>
                                    <p><img src="./share.svg" alt="Share" onClick={() => handleShareClick(quiz)} /></p>
                                </div>
                                <p className='analysis_text'>Question Wise Analysis</p>
                            </div>
                        ))}
                    </div>
                </div>

                {showDeletePopup && (
                    <div className="popup">
                        <div className="popup_content">
                            <p className='popup_heading'>Are you confirm you
                                <br />
                                want to delete?</p>
                            <div className='popup_btns'>
                                <button className='popup_yes' >Confirm Delete</button>
                                <button className='popup_No' onClick={closeDeletePopup}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}

                {showSharePopup && (
                    <div className="popup">
                        <div className="popup_share">
                            <div className='share_content'>
                                <span><img src="./sharetik.svg" alt="Share Icon" /></span>
                                <p className='popup_heading_share'>
                                    Link copied to Clipboard
                                    <span className="underline"></span>
                                </p>
                                <span className='cancel-btn' onClick={closeSharePopup}><img src="./cancle.svg" alt="Cancel" /></span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Quiz_Analysis;
