
import React, { useState } from 'react';
import '../Styles/Event.css';
import event1 from '../assets/event1.jpg';



const events = [
  {
    title: "UNDERSTANDING THE BLUEPRINT OF LIFE FOR PERSONAL AND PROFESSIONAL GROWTH",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel...",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.",
    image: event1
  },
  {
    title: "EXPLORING THE UNIVERSE: A JOURNEY THROUGH SPACE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel...",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.",
    image: event1
  },
  {
    title: "THE FUTURE OF TECHNOLOGY: INNOVATIONS AND TRENDS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel...",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.",
    image: event1
  },
  {
    title: "HEALTH AND WELLNESS: TIPS FOR A BALANCED LIFE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel...",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.",
    image: event1
  },
  {
    title: "ART AND CULTURE: EXPRESSIONS OF HUMAN CREATIVITY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel...",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.",
    image: event1
  }
];

const Event = () => {
  const [expandedIndices, setExpandedIndices] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="row">
      {events.map((event, index) => (
        <div className="column" key={index}>
          <div className="card">
            <h3>{event.title}</h3>
            <img className="image" src={event.image} alt={event.title} />
            <p>
              {event.description}
              <span
                style={{ display: expandedIndices.includes(index) ? 'none' : 'inline' }}
              >
                ...
              </span>
              <span
                style={{ display: expandedIndices.includes(index) ? 'inline' : 'none' }}
              >
                {event.fullDescription}
              </span>
            </p>
            <button onClick={() => toggleExpand(index)}>
              {expandedIndices.includes(index) ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
