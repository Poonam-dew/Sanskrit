import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/LearningSanskrit.css";
import libraryIcon from "../assets/library.png";  // Replace with actual image path
import SanFun from "../assets/SanskritFun.png";    // Replace with actual image path
import Activity from "../components/RecentActivity.jsx"

const LearnSanskrit = () => {
  const navigate = useNavigate();

  return (
    <div className="learning-container">
      <div className="circle-container">
        <div className="circle" onClick={() => navigate("/clubLibrary")}>
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

const LearningSanskrit = () => {
  return (
    <div >
      <LearnSanskrit />
      <Activity />
    </div>
  );
}

export default LearningSanskrit;
