import React, { useState } from "react";
import Dashboard from "../../Component/DashBoard/Dashboard";
import CreateQuizPopup from "../../Component/Popup/CreateQuiz/CreatQuiz"; // Ensure correct path
import Quiz_Analysis from "../../Component/QuizAnalysis/Quiz_Analysis";
import Sidebar from "../../Component/sidebar/Sidebar";
// import './DashbordLayout.css'; // Ensure this file exists and has necessary styles

const DashbordLayout = () => {

  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "Quiz Analysis":
        return <Quiz_Analysis />;
      case "Create Quiz":
        return <CreateQuizPopup onClose={() => setActiveComponent("Dashboard")} />;
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
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default DashbordLayout;
