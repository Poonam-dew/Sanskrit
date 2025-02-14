import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
  
    <div className="home">
      <div>
        <h1 className="aboutUs">ABOUT US</h1>
      </div>
      <div className="aboutUnder">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="about-two">
        <div className="left">
          <p>संस्कृत-मण्डलः संस्कृतभाषायाः</p>
          <p>पुनरुत्थानस्य च संवर्धनस्य कृते एकः </p>
          <p>उपक्रमः वर्तते।</p>
          <br></br>
          <p> The Sanskrit Club is an initiative to revive</p>
          <p>and promote the bedrock for the growth</p>
          <p>of a large part of the glorious Indian</p>
          <p>Civilisation, the Sanskrit language.</p>
        </div>
        <div className="vertical"></div>
        <div className="right">
          <div class="box-one">
            <p className="text-one">नमो नमः!</p>

            <p className="text-two"> namo namah! </p>
          </div>
          <div class="box-two">
            <p className="text-one">संस्कृत-मण्डले सुस्वागतम्</p>
            <p className="text-two">welcome to sanskrit club </p>
          </div>
        </div>
      </div>
      <div className="announcements">
        <h1> ANNOUNCEMENTS</h1>
      </div>
      <div className="Under-two">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="announcements-two">
        <div className="left">
        <p style={{fontWeight:"600"}}>
           
            जाड्यं धियो हरति सिंचति वाचि सत्यं,</p>
           <p style={{fontWeight:"600"}}> मानोन्नतिं दिशति पापमपाकरोति |</p>
           <p style={{fontWeight:"600"}}> चेतः प्रसादयति दिक्षु तनोति कीर्तिं, </p>
           <p style={{fontWeight:"600"}}> सत्संगतिः कथय किं न करोति
            पुंसाम् ||
          </p>
          <br></br>
          <p>
            {" "}
            (अच्छे मित्रों का साथ बुद्धि की जड़ता को हर लेता है, वाणी में</p>
             <p>सत्य का संचार करता है, मान और उन्नति को बढ़ाता है और पाप</p>
             <p> से मुक्त करता है| चित्त को प्रसन्न करता है और हमारी कीर्ति को</p>
              <p> सभी दिशाओं में फैलाता है| आप ही कहें कि सत्संगति मनुष्यों के</p> 
                <p>भले के लिये क्या नहीं करती!)
          </p>
        </div>
        <div className="right">
         
          <div className="text-one">
         <p> <h3>Geeta Samskritam course was successfully concluded on 4th September 2022.</h3></p>
          </div>
          <div className="text-two"> </div>
          <div className="text-three"></div>
          
        </div>
      </div>
    </div>
    
  );
};
export default Home;
