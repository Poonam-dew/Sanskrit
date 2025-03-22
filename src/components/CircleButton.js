import React from "react";
import "../Styles/CircleButton.css"; // Import CSS for styling

const CircleButton = ({ imageSrc, text, link }) => {
  return (
    <a href={link} className="circle-button">
      <img src={imageSrc} alt={text} className="button-image" />
      <p className="button-text">{text}</p>
    </a>
  );
};

export default CircleButton;
