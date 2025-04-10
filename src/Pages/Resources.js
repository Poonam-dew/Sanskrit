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
        {title:"Story Audios: ", label: "archive.org", url: "https://archive.org/search?query=balamodini" },
        {title:"Typesetting documents in Samskritam: ", label: "YouTube Demo", url: "https://www.youtube.com/watch?v=T8CWDcTwBz0" },
        {title:"Sanskrit meters: ", label: " Identify Sanskrit chhandas", url: "https://sanskritmetres.appspot.com/identify" },
        {title:"Pramukh IME: ", label: "Type in 23 Indian languages", url: "https://www.pramukhime.com/" },
        {title:"Internet Sacred Texts Archive: ", label: "sacred-texts.com", url: "https://www.sacred-texts.com/index.htm" },
        {title:"Play and learn: ", label: "Sanskrit games on MasterAnyLanguage", url: "https://www.masteranylanguage.com/c/r/o/Sanskrit/Games" },
        {title:"Gamifying Sanskrit teaching: ", label: "संस्कृतमैत्री | Sanskrit Maitri", url: "https://www.sanskritmaitri.com/" },
        {title:"Bhagawad Geeta Software: ", label: "YouTube Demo", url: "https://youtu.be/2HgVg5EouCU" },
        {title:"Samskrita Bharati's Pravesha course exercises in MEMRiSE platform: ", label: "YouTube Demo", url: "https://www.youtube.com/watch?v=tzzoj8uJmwc" },
        {title:"The Sanskrit Heritage Site: ", label: "Various Services for the Computational treatment of Sanskrit", url: "https://sanskrit.inria.fr/" },
        {title:"Sanskrit Grammarian: ", label: "Word forms according to Sanskrit grammar rules", url: "https://sanskrit.inria.fr/DICO/grammar.html" },
        {title:"Sanskrit Documents: ", label: "A compilation of Sanskrit texts in Indian language scripts.", url: "https://sanskritdocuments.org/" },
        {title:"Vowel Sandhi Exercise Tool: ", label: "Test your Sandhi Knowledge", url: "https://www.sanskrit-trikashaivism.com/sanstoolkit1.php" },
        {title:"Learn Marathi, Sanskrit, Hindi: ", label: "Chitrakshar App: YouTube Demo", url: "https://youtu.be/bTpNCd93If8" },
        {title:"Sanskrit Transliteration tool: ", label: "Github", url: "https://github.com/sanskrit/sanscript.js" },
        {title:"Word-Finder Generator: ", label: "Game", url: "https://kpachar.github.io/vishnu/find.html" },
        {title:"Word Clouds for ShrimadBhagawad Geeta: ", label: "Kolichala", url: "http://kolichala.com/BhG/" },
        {title:"Ghati App: ", label: "Google Playstore", url: "https://play.google.com/store/apps/details?id=appinventor.ai_harshthakkar.ghaTI&hl=en_CA&gl=US" },
        {title:"Paint by Sankhya in Sanskrit: ", label: "PBSify", url: "https://pbsify.ml/" },
        {title:"Asmaakam bhaashaa | अस्माकं भाषा", label: "Words in Mother Tongue close to Samskritam root", url: "http://123kakha.ga/1008/" },
        {title:"Choomantra", label: "Website", url: "http://123kakha.ga/1008/" },
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
              {section.title} 
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
          View Articles 
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
          View Resources 
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
