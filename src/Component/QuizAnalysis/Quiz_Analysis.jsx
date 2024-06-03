import React, { useState, useEffect } from "react";
import "./Quiz_Analysis.css";
import { deleteData } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz_Analysis = ({ data, setActiveComponent, loading , callApi,setCallApi, setSelectedquiz}) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false); // State to manage loading status

  const quizzes = data?.data; // Ensure data is not null before accessing its properties

  const handleQuestionAnalysis = (quiz) => {
    console.log(quiz)
    setActiveComponent("Question Analysis");
    setSelectedquiz(quiz)
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

  const deleteQuiz = async () => {
    try {
      setDeleteLoading(true); // Set loading state to true
      const endpoint = `/quiz/${selectedQuiz.quiz_id}`; // Update with the correct endpoint
      await deleteData(endpoint); // Call deleteData function to delete the quiz
      toast.success(`Quiz Deleted successfully!`);
      setCallApi(!callApi)

      // Perform any necessary action after successful deletion
    } catch (error) {
      console.error("Error deleting quiz:", error);
      toast.error(`Quiz Deleted successfully!`);

      // Handle error
    } finally {
      setDeleteLoading(false); // Set loading state back to false after API call is completed
      closeDeletePopup(); // Close the delete popup
    }
  };

  const highNuber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    }
    return number;
  };

  return (
    <>
      <ToastContainer />
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
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
                  <p>{highNuber(quiz.impression)}</p>
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
                  <button
                    className="popup_yes"
                    onClick={deleteQuiz}
                    disabled={deleteLoading}
                  >
                    {deleteLoading ? "Deleting" : "Confirm Delete"}
                  </button>
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
