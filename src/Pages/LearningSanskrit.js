import React, { useState } from "react";
import "../Styles/LearningSanskrit.css";
import vibhooshita from "../assets/vibhooshita.ogg";


const shlokas = [
  {
    id: 1,
    title: "ALLITERATION",
    shlok: `विभूषितानङ्गरिपूत्तमाङ्गा 
            <br>सद्यः कृतानेकजनार्तिभङ्गा |
            <br>
            मनोहरोत्तुङ्गचलत्तरङ्गा
            <br> गङ्गा ममाङ्गान्यमलीकरोतु ||`,
    description: `This shloka is part of Ganga-Lahari (Waves of Ganga), composed by Pandit Jagannath. The story behind this famous composition is as interesting as the essence of the shloka itself. Pandit Jagannath, when faced with a terrible crisis, decides to please Mother Ganga by singing verses in her praise. He composes 52 shlokas there and then on the banks of Ganga, and with each shloka, she (Mother Ganga) rises one step. Eventually, the great pandit becomes one with her, that is, he dies a noble death. This particular shloka, composed in the viparītākhyānikī (विपरीताख्यानिकी) meter, is the 52nd shloka of Ganga-Lahari, and exemplifies the genius of Pandit Jagannath. The repetition of the ङ्ग sound is the key feature - the literary device of alliteration is used, but the arrangement of the adjectives used for Ganga is the true beauty; remember he was doing it extempore!`,
    translation: `विभूषिता अनङ्ग-रिपु-उत्तम-अङ्गा The one who adorns the upper-most part of the enemy of Ananga [Lord of Kama], that is, the one who adorns the head of Lord Shiva! सद्यः कृता अनेक-जन-आर्ति-भङ्गा The one who immediately destroys multiple griefs of people, मनोहरा उत्तुङ्ग-चलत्तरङ्गा The one whose huge waves are delightful, गङ्गा मम अङ्गानि अमली-करोतु O Ganga, make my parts (of the body) clean/pure.`,
    audio: vibhooshita
  },
  {
    id: 2,
    title: "CONTRADICTORY MEANING",
    shlok: `केशवं पतितं दृष्ट्वा
            <br>
            पाण्डवाः हर्षनिर्भराः |
            <br>
            रुदन्ति कौरवास्तत्र
            <br>
            हा हा केशव केशव ||`,
    description: `Here, the poet creates an illusion by leading the reader to believe what appears to be prima facie in the subhashitam. So translated literally, it says that the Pandavas are overjoyed on seeing Keshav (Lord Krishna) fallen down, while the Kauravas are crying! This is somewhat contradictory to the common sense, as Krishna was on the side of Pandavas and against Kauravas, in the great war of Mahabharat. But the poet has tactfully used pun, and the other meaning is amusing indeed. The verse is composed in anuṣṭup (अनुष्टुप्) meter.`,
    translation: `के शवं पतितं दृष्ट्वा On seeing the dead body (शवं) fallen, in the water (के), पाण्डवाः हर्षनिर्भराः The pandavas (a species of water-birds) are filled with joy, रुदन्ति कौ-रवाः तत्र And hence the crows (कौ-रव the ones who have voices like 'kau') are crying. हा हा केशव केशव Ha ha Keshav!! What a miracle!`,
    audio: vibhooshita
  }
];

const LearningSanskrit = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="learn">
      <div className="heading">
        <h1>Sanskrit for Fun!</h1>
        <h3>
          Come let's see some witty and thought-provoking Subhashitas and their meanings.
        </h3>
        <h3>
          Click on a shloka to read more about it, and to listen to its melody.
        </h3>
      </div>
      {shlokas.map((shlok) => (
        <div key={shlok.id}>
          <h2>{shlok.title}</h2>
          <div className="shlok">
            <p style={{ fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: shlok.shlok }}></p>
            <span
              style={{ display: expandedId === shlok.id ? "none" : "inline" }}
            ></span>
            <span
              style={{ display: expandedId === shlok.id ? "inline" : "none" }}
            >
              <p className="audio">
                <audio controls>
                  <source src={shlok.audio} type="audio/ogg" />
                  Your browser does not support the audio tag.
                </audio>
              </p>
              <p>{shlok.description}</p>
              <p>{shlok.translation}</p>
            </span>
            <button onClick={() => toggleExpand(shlok.id)}>
              {expandedId === shlok.id ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearningSanskrit;
