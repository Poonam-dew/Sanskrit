import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/LearningSanskrit.css";
import libraryIcon from "../assets/library.png";  // Replace with actual image path
import SanFun from "../assets/SanskritFun.png";    // Replace with actual image path

const LearningSanskrit = () => {
  const navigate = useNavigate();

  return (
    <div className="learning-container">
      <div className="circle-container">
        <div className="circle" onClick={() => navigate("/library")}>
          <img src={libraryIcon} alt="Library" />
          <h3>Club Library</h3>
        </div>
        
        <div className="circle" onClick={() => navigate("/sanskrit-fun")}>
          <img src={SanFun} alt="Sanskrit Fun" />
          <h3>Sanskrit for Fun!</h3>
        </div>
      </div>
    </div>
  );
};

export default LearningSanskrit;
