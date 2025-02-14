import React, { useState } from "react";
import "../Styles/Team.css";
import SLogo from "../assets/SLogo.png";
import event1 from '../assets/event1.jpg';
// Import more images as needed

const teamMembers = [
  { src: SLogo, name: "Team Member 1" },
  { src: SLogo, name: "Team Member 2" },
  { src: SLogo, name: "Team Member 3" },
  { src: SLogo, name: "Team Member 4" },
  { src: event1, name: "Team Member 5" },
  { src: event1, name: "Team Member 6" },
  { src: event1, name: "Team Member 7" },
  // Add more objects as needed
];

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="team">
      <div className="heading">
        <h1>Our Team</h1>
      </div>
      <div className="images">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="image-container"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className={`image ${hoveredIndex === index ? 'hidden' : ''}`}
              src={member.src}
              alt={member.name}
            />
            {hoveredIndex === index && (
              <div className="hover-text">{member.name}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
