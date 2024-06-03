import React from "react";
import "./Dashboard.css";
import Tranding_Quiz from "../../Component/Tranding/Tranding_Quiz";
import Sidebar from "../../Component/sidebar/Sidebar";

const Dashboard = ({ data, loading }) => {
  console.log("pinu", data);
  const highNuber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    }
    return number;
  };
  const totalImpressions = 1000; // example value
  const formattedImpressions = highNuber(totalImpressions);

  return (
    <div style={{ height: "100vh" }}>
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="background_color_total">
          <div className="quiz_alldiv">
            <div className="quiz">
              <p className="toatal_quiz">
                {data.totalQuizzes} <span className="created_quiz">Quiz</span>{" "}
              </p>
              <p className="created_quiz">Created </p>
            </div>
            <div className="Questions">
              <p className="total_questions">
                {data.totalQuestions} <span className="created_questions">questions</span>{" "}
              </p>
              <p className="created_questions">Created </p>
            </div>
            <div className="Impressions">
              <p className="toatal_Impressions">
                {data.totalImpressions}{" "}
                <span className="created_Impressions">Total</span>{" "}
              </p>
              <p className="created_Impressions">Impressions</p>
            </div>
          </div>
          <Tranding_Quiz quizzes={data.data} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
