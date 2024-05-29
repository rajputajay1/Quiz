import React, { useState } from 'react';
import "./Sidebar.css";
import CreateQuizPopup from '../Popup/CreateQuiz/CreatQuiz';
const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility

    const handleItemClick = (index) => {
        setActiveIndex(index);
        if (index === 2) { // Assuming 'Create Quiz' is at index 2 (zero-indexed)
            setShowPopup(true); // Open the popup
        }
    };

    const closePopup = () => {
        setShowPopup(false); // Function to close the popup
    };

    return (
        <div className="sidebar">
            <p className="sidebar-header">QUIZZIE</p>
            <ul className="sidebar-list">
                {['Dashboard', 'Analytics', 'Create Quiz'].map((item, index) => (
                    <li
                        key={index}
                        className={`sidebar-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleItemClick(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <p className="logout">Logout</p>

            {/* Render CreateQuizPopup if showPopup is true */}
            {showPopup && <CreateQuizPopup onClose={closePopup} />}
        </div>
    );
};

export default Sidebar;
