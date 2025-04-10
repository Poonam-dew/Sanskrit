import React from "react";
import { FaEnvelope } from "react-icons/fa"; // Use react-icons for consistency and reliability

const Member = ({ img, name, branch, year, gmail }) => {
  return (
    <div className="superContainer">
      <div className="containers">
        <div className="img">
          <img src={img} alt={name} className="generated_image" onError={() => console.error("Image failed to load:", img)}/>
        </div>
        <div className="information">
          <h1 className="information_heading">{name}</h1>
          <p className="information_para">
            {branch} ({year} year)
          </p>
          <div className="links">
            {gmail && (
              <a
                href={`mailto:${gmail}`}
                target="_blank"
                rel="noreferrer"
                className="generated_link"
              >
                <FaEnvelope size={20} style={{ color: "black" }} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="name">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Member;
