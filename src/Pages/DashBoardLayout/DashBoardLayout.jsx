import React, { useEffect, useState } from "react";
import Dashboard from "../../Component/DashBoard/Dashboard";
import CreateQuizPopup from "../../Component/Popup/CreateQuiz/CreatQuiz"; // Ensure correct path
import Quiz_Analysis from "../../Component/QuizAnalysis/Quiz_Analysis";
import Sidebar from "../../Component/sidebar/Sidebar";
import Question_Analysis from "../../Component/Question_Analysis/Question_Analysis";
import { fetchGetData } from "../../api";
// import './DashbordLayout.css'; // Ensure this file exists and has necessary styles

const DashbordLayout = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [dashboardData, setDashboardData] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");

        const dashboard = await fetchGetData("quiz/dashboard", {}, token);
        const quiz = await fetchGetData("quiz/", {}, token);
        setDashboardData(dashboard);
        setQuizData(quiz);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard data={dashboardData} loading={loading} />;
      case "Quiz Analysis":
        return (
          <Quiz_Analysis
            data={quizData}
            setActiveComponent={setActiveComponent}
            loading={loading}
          />
        );
      case "Question Analysis":
        return <Question_Analysis  />;
      case "Create Quiz":
        return (
          <CreateQuizPopup onClose={() => setActiveComponent("Dashboard")} />
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="layout">
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <div className="main-content">{renderComponent()}</div>
    </div>
  );
};

export default DashbordLayout;
