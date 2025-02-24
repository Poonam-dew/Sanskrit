import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left">
    <section className="about-us">
      <h2>ABOUT US</h2>
      <div className="about-content">
        <p>
          संस्कृत-मण्डलः संस्कृतभाषायाः पुनरुत्थानस्य च संवर्धनस्य कृते एकः उपक्रमः वर्तते ।
        </p>
        <p>
          The Sanskrit Club is an initiative to revive and promote the bedrock for the growth
          of a large part of the glorious Indian Civilisation, the Sanskrit language.
        </p>
      </div>
    </section>
    </div>

    <div className="right">
      <div className="Namo Namah">
        <h2>नमो नमः!</h2>
        <h2>Namo Namah!</h2>
      </div>
      <div className="Welcome">
      <h2>संस्कृत-मण्डले सुस्वागतम् </h2>
      <h2>Welcome to Sanskrit Club</h2>
      </div>
      </div>
  </div>
    
    
  );
};
export default Home;
