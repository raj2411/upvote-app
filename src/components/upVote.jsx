import React from "react";
import "./upVote.css";

const Upvote = ({ isSelected, onClick }) => {
  return (
    <div
      data-testid="upvote-button" 
      className={`upvote ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={isSelected ? "#253CF2" : "#343A40"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </div>
  );
};

export default Upvote;
