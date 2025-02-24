import React, { useState } from 'react';
import '../Styles/CourseCard.css';

const CourseCard = ({ img, heading, subheading, info, details, materials }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="course_card">
      <img src={img} className="course_img" alt="Course" />
      <div className="course_card_info">
        <h2 className="course_card_heading">{heading}</h2>
        <h3 className="course_card_subheading">{subheading}</h3>
        <ul className="courselinks">
          {info.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="knowbtn" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'SHOW LESS' : 'KNOW MORE'}
        </button>

        {/* Expandable Section */}
        {expanded && (
          <div className="course_details">
            <h2>COURSE DETAILS</h2>
            <h3>Overview</h3>
            <ul className="knowlist">
              {details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>COURSE MATERIALS</h2>
            <h3>Access all course materials here...</h3>
            <ul className="material_links">
              {materials.map((item, index) => (
                <li key={index}>
                  <a className="cli" href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
