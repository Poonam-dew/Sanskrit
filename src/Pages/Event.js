import React from "react";
import MyCarousel from "../components/Carousel.js";
import event1 from "../assets/ConvoChanting.jpeg";
import event2 from "../assets/pragy.jpeg"; 
import "../Styles/Event.css"; 

const EventsWeHave = () => {
  return (
    <div className="EventsWeHave">
      <div className="eventSlider">
        <MyCarousel />
      </div>
      
      <h2 className="eventHeading">Our Main Events</h2>

      <div className="eventContent">
        <div className="eventText">
          <p>
            Our main events bring together enthusiasts and professionals to share
            knowledge, network, and showcase innovations. Stay tuned for
            upcoming events filled with excitement and learning opportunities.
          </p>
        </div>
        <div className="eventImage">
          <img src={event1} alt="Main Event 1" />
        </div>
      </div>

      <div className="eventContent">
        <div className="eventText">
          <p>
            Explore the journey of knowledge and fun through our engaging events. 
            Learn, share, and innovate with industry leaders and like-minded individuals.
          </p>
        </div>
        <div className="eventImage">
          <img src={event2} alt="Main Event 2" />
        </div>
      </div>

      <div className="eventContent">
        <div className="eventText">
          <p>
            Join us in shaping the future by participating in our key events. 
            Stay updated and be part of an inspiring community of changemakers.
          </p>
        </div>
        <div className="eventImage">
          <img src={event1} alt="Main Event 3" />
        </div>
      </div>
    </div>
  );
};

export default EventsWeHave;
