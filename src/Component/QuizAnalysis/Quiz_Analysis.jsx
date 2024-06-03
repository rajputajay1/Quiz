import React, { useState, useEffect } from "react";
import "./Quiz_Analysis.css";

const Quiz_Analysis = ({ data, setActiveComponent, loading }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const quizzes = data?.data; // Ensure data is not null before accessing its properties

  const handleQuestionAnalysis = (quiz) => {
    setActiveComponent("Question Analysis");
  };
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
  const highNuber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    }
    return number;
  };

  return (
    <>
      {loading ? (
        <div className="loading-spinner">
          {/* You can add loading spinner or message here */}
          <p>Loading...</p>
        </div>
      ) : (
        <div className="quiz_analysis_width">
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
                  <p>{quiz.quiz_name}</p>
                  <p>{quiz.createdOn}</p>
                  <p>{highNuber(quiz.impressions)}</p>
                  <div className="actions">
                    <p>
                      <img src="./edit1.svg" alt="Edit" />
                    </p>
                    <p>
                      <img
                        src="./delete.svg"
                        alt="Delete"
                        onClick={() => handleDeleteClick(quiz)}
                      />
                    </p>
                    <p>
                      <img
                        src="./share.svg"
                        alt="Share"
                        onClick={() => handleShareClick(quiz)}
                      />
                    </p>
                  </div>
                  <p
                    className="analysis_text"
                    onClick={() => handleQuestionAnalysis(quiz)}
                  >
                    Question Wise Analysis
                  </p>
                </div>
              ))}
            </div>
          </div>

          {showDeletePopup && (
            <div className="popup">
              <div className="popup_content">
                <p className="popup_heading">
                  Are you confirm you
                  <br />
                  want to delete?
                </p>
                <div className="popup_btns">
                  <button className="popup_yes">Confirm Delete</button>
                  <button className="popup_No" onClick={closeDeletePopup}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {showSharePopup && (
            <div className="popup">
              <div className="popup_share">
                <div className="share_content">
                  <span>
                    <img src="./sharetik.svg" alt="Share Icon" />
                  </span>
                  <p className="popup_heading_share">
                    Link copied to Clipboard
                    <span className="underline"></span>
                  </p>
                  <span className="cancel-btn" onClick={closeSharePopup}>
                    <img src="./cancle.svg" alt="Cancel" />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Quiz_Analysis;
