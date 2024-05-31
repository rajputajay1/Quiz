import React from "react";
// import "./Option.css";

const Option = ({ option, isSelected, onClick }) => {
  return (
    <div className={`option ${isSelected ? "selected" : ""}`} onClick={onClick}>
      {option.type === "text" && (
        <p className="option-text">{option.content}</p>
      )}
      {option.type === "image" && (
        <img src={option.content} alt="option" className="option_image" />
      )}
    </div>
  );
};

export default Option;
