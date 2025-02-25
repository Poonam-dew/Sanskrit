import React, { useState } from 'react';
import '../Styles/Event.css';
import event1 from '../assets/event1.jpg';  // Example image
import event2 from '../assets/event2.jpg';  // Example image

const Event = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="cont">
      <div className="container">
        <div className="tabs">
          <button
            className={`tab upcoming ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <span className='text'>upcoming events</span>
          </button>
          <button
            className={`tab past ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            <span className='text'>past events</span>
          </button>
        </div>
        <div className="content">
          {activeTab === 'upcoming' ? (
            <div className="event-posters">
              <img src={event1} alt="Upcoming Event" className="event-img" />
              <img src={event1} alt="Upcoming Event" className="event-img" />
              <img src={event1} alt="Upcoming Event" className="event-img" />
            </div>
          ) : (
            <div className="event-posters">
              <img src={event2} alt="Past Event" className="event-img" />
              <img src={event2} alt="Past Event" className="event-img" />
              <img src={event2} alt="Past Event" className="event-img" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
