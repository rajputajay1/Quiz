import React from "react";
import "./Sidebar.css";

const Sidebar = ({ activeComponent, setActiveComponent }) => {

  const handleItemClick = (item) => {
    setActiveComponent(item);
  };

  return (
    <div className="sidebar">
      <p className="sidebar-header">QUIZZIE</p>
      <ul className="sidebar-list">
        {["Dashboard", "QuizAnalysis", "CreateQuizPopup"].map((item, index) => (
          <li
            key={index}
            className={`sidebar-item ${activeComponent === item ? "active" : ""}`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="logout">Logout</p>
    </div>
  );
};

export default Sidebar;
