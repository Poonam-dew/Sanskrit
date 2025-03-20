import React, { useState } from "react";
import "../Styles/Team.css";
import SLogo from "../assets/SLogo.png";
import event1 from '../assets/event1.jpg';
// Import more images as needed


const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      
    </div>
  );
};

export default Team;
