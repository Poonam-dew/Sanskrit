import React, { useState } from 'react';
import '../Styles/Resources.css';
import Activity from "../components/RecentActivity.jsx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Resources = () => {
  const [expandedIndexBox1, setExpandedIndexBox1] = useState(null);
  const [expandedIndexBox2, setExpandedIndexBox2] = useState(null);
  const [expandedIndexBox3, setExpandedIndexBox3] = useState(null);

  const box1Links = [
    {
      title: "Existing TA-RG-ETs in Samskritam",
      links: [
        {title:"Chandamama archives", label: "Link A", url: "#" },
        {title:"hee", label: "Link B", url: "#" },
      ],
    },
    {
      title: "Other ideas usable for Samskritam",
      links: [
        { title:"hee",label: "Idea Link A", url: "#" },
        { title:"hee",label: "Idea Link B", url: "#" },
      ],
    },
    {
      title: "General Resources",
      links: [
        { label: "Resource Link A", url: "#" },
        { label: "Resource Link B", url: "#" },
      ],
    },
    {
      title: "General Resources",
      links: [
        { label: "Resource Link A", url: "#" },
        { label: "Resource Link B", url: "#" },
      ],
    },
  ];

  const researchArticles = [
    {
      title: "Akshara by R. N. Iyengar",
      url: "#",
    },
    {
      title: "Vedas & Mathematics",
      url: "#",
    },
  ];

  const toggleDropdown = (index, setter, currentIndex) => {
    setter(currentIndex === index ? null : index);
  };

  return (
    <div className="fun-container">
      {/* Box 1 - Useful Links */}
      <div className="resource-box">
        <h2 className="box-title">SOME USEFUL LINKS</h2>
        <p className="box-subtitle">For the TARGET संस्कृतम् Hackathon and general resources</p>
        {box1Links.map((section, index) => (
          <div key={index} className="dropdown-section">
            <button
              className="dropdown-toggle"
              onClick={() => toggleDropdown(index, setExpandedIndexBox1, expandedIndexBox1)}
            >
              {section.title} {expandedIndexBox1 === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expandedIndexBox1 === index && (
  <div className="link-list">
    {section.links.map((link, i) => (
      <div key={i} className="link-row">
        <span className="link-heading">{link.title}:<a href={link.url} target="_blank" rel="noopener noreferrer" className="link-anchor">
          {link.label}
        </a></span>
        
      </div>
    ))}
  </div>
)}

          </div>
        ))}
      </div>

      {/* Box 2 - Research Articles */}
      <div className="resource-box">
        <h2 className="box-title">RESEARCH ARTICLES</h2>
        <p className="box-subtitle">Click here to find some research articles, and related links</p>
        <button
          className="dropdown-toggle"
          onClick={() => toggleDropdown(0, setExpandedIndexBox2, expandedIndexBox2)}
        >
          View Articles {expandedIndexBox2 === 0 ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {expandedIndexBox2 === 0 && (
          <div className="card-container">
            {researchArticles.map((article, index) => (
              <div className="pdf-card" key={index}>
                <p>{article.title}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Open PDF</a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Box 3 - Optional Extra Box */}
      <div className="resource-box">
        <h2 className="box-title">MORE RESOURCES</h2>
        <p className="box-subtitle">Extra documents, PDFs and useful stuff</p>
        <button
          className="dropdown-toggle"
          onClick={() => toggleDropdown(0, setExpandedIndexBox3, expandedIndexBox3)}
        >
          View Resources {expandedIndexBox3 === 0 ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {expandedIndexBox3 === 0 && (
          <div className="card-container">
            <div className="pdf-card">
              <p>Vedic Literature Summary</p>
              <a href="#">Open PDF</a>
            </div>
            <div className="pdf-card">
              <p>Panini Sutras PDF</p>
              <a href="#">Open PDF</a>
            </div>
          </div>
        )}
      </div>

      <Activity />
    </div>
  );
};

export default Resources;
