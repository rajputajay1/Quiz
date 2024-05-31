import React from "react";
import "./Sidebar.css";

const Sidebar = ({ activeComponent, setActiveComponent }) => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleItemClick = (item) => {
    setActiveComponent(item);
  };

  const handleLogoutClick = () => {
    // setSelectedQuiz(quiz);
    setShowLogoutPopup(true);
};

  const closeLogoutPopup = () => {
    setShowLogoutPopup(false);
  };

  const confirmLogout = () => {
    // Implement quiz deletion logic here
    closeLogoutPopup();
  };
  return (
    <>
      <div className="sidebar">
        <p className="sidebar-header">QUIZZIE</p>
        <ul className="sidebar-list">
          {["Dashboard", "QuizAnalysis", "CreateQuizPopup"].map(
            (item, index) => (
              <li
                key={index}
                className={`sidebar-item ${
                  activeComponent === item ? "active" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            )
          )}
        </ul>
        <button onClick={() => handleLogoutClick} className="logout">Logout</button>
      </div>
      {showLogoutPopup && (
        <div className="popup">
          <div className="popup_content">
            <p className="popup_heading">
              Are you confirm you
              <br />
              want to Logout?
            </p>
            <div className="popup_btns">
              <button className="popup_yes" onClick={confirmLogout}>
                Confirm 
              </button>
              <button className="popup_No" onClick={closeLogoutPopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
