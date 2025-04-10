import React, { useState, useRef } from "react";
import "../Styles/SanskritFun.css";
import { FaPlay, FaPause, FaChevronDown, FaChevronUp } from "react-icons/fa";
import buddhaAudio from "../assets/audio/buddha.mpeg";
import manishad from "../assets/audio/manishad.ogg";
import keshav from "../assets/audio/keshav.mp4";
import rajyabhisheke from "../assets/audio/rajyabhisheke.m4a";
import am from "../assets/audio/am.ogg";
import vibhooshita from "../assets/audio/vibhooshita.ogg";

const SanskritFun = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

 const shlokas = [
    {
      title: "Namo Buddhaay",
      shloka: `कलत्रं च पुत्रं च मित्रादि सर्वम्
मनःशान्तये प्राज्यमुत्सृज्य राज्यम् |
अपूर्वा त्वया दर्शिता त्यागवृत्तिः
नमस्ते महाभाग बुद्ध त्रिवारम् ||`,
      audio: buddhaAudio,
      meaning: `This shloka is a part of a poem, which has been composed in one of the most perfect and the most symmetric meters, Bhujaṅgaprayātam (भुजङ्गप्रयातम्). Upon inspection, it becomes evident that it follows a fixed pattern of 1 short and 2 long syllables. Represented by |ऽऽ (लघु-गुरु-गुरु), this pattern very strongly resembles the movement of a snake, which travels in one straight direction and performs two curving motions in one cycle. Hence, the name; bhujaṅga means snake, and prayātam means movement.
The meter consists of 4 padas (पद, or line), each of which has 4 such cycles of |ऽऽ. The poet takes advantage of this regular rhythm to convey the prayer with reverence, in a soft melodious tune!`,
      wordByWord: `उत्सृज्य: Giving up  ,
        कलत्रं च पुत्रं च मित्रादि सर्वम्: wife, offspring, friend, and all others  ,
        मनःशान्तये प्राज्यम् राज्यम्: peace of mind, lavish lifestyle, and the kingdom  ;
       अपूर्वा त्वया दर्शिता त्यागवृत्तिः: never before was such a sacrificing attitude displayed  ;
        नमस्ते महाभाग बुद्ध त्रिवारम्: I bow down thrice to you, O great soul of Buddha.`
    },
    {
      title: "First Shloka in History",
      shloka: `मा निषाद प्रतिष्ठां त्वम्
अगमः शाश्वतिः समाः |
यत् क्रॉञ्चमिथुनादेकम्
अवधिः काममोहितम् ||`,
      audio: manishad,
      meaning: `This shloka is actually the result of Maharshi Valmiki's anger!
It's said that शोकः श्लोकात्मगतः - Curse took the form of verse!
Once when the great sage was returning from his bath, he witnessed a male क्रौञ्च bird - which was engaged in mating - succumbing to the arrow of a hunter. The sage was infuriated by this, and uttered a curse, which miraculously consisted of lines following a fixed rhythm. And thence was born the first shloka in history, along with the legendary meter of anuṣṭup (अनुष्टुप्), that prompted Lord Brahma to order Maharshi Valmiki to compose the epic of Ramayana, in the same meter!
`,
      wordByWord: `निषाद "O hunter  ,"
त्वम् प्रतिष्ठां शाश्वतिः समाः मा अगमः "you won't get any prestige or permanentness (in other words, you won't get a place in history)  ,"
यत् क्रॉञ्च-मिथुनात् "because, from the union of the Kraunch birds  ,"
एकम् काममोहितम् अवधिः "you have killed one of those infatuated by desire."`
    },
    {
      title: "Contradictory Meaning",
      shloka: `केशवं पतितं दृष्ट्वा
पाण्डवाः हर्षनिर्भराः |
रुदन्ति कौरवास्तत्र
हा हा केशव केशव ||`,
      audio: keshav,
      meaning: `Here, the poet creates an illusion by leading the reader to believe what appears to be prima facie in the subhashitam.
So translated literally, it says that the Pandavas are overjoyed on seeing Keshav (Lord Krishna) fallen down, while the Kauravas are crying! This is somewhat contradictory to the common sense, as Krishna was on the side of Pandavas and against Kauravas, in the great war of Mahabharat. But the poet has tactfully used pun, and the other meaning is amusing indeed.
The verse is composed in anuṣṭup (अनुष्टुप्) meter.
`,
      wordByWord: `के शवं पतितं दृष्ट्वा On seeing the dead body (शवं) fallen, in the water (के)  ,
पाण्डवाः हर्षनिर्भराः The pandavas (a species of water-birds) are filled with joy  ,
रुदन्ति कौ-रवाः तत्र And hence the crows (कौ-रव the ones who have voices like 'kau') are crying .
हा हा केशव केशव Ha ha Keshav!! What a miracle!`
    },
    {
      title: "Verse from a Sound",
      shloka: `राज्याभिषेके मदविह्वलायाः
हस्ताच्च्युतोS हेमघटस्तरुण्याः |
सोपानमासाद्य करोति शब्दम्
ठं ठं ठठं ठं ठठठं ठठं ठः||`,
      audio: rajyabhisheke,
      meaning: `Composed by one of the legendary poets in the history of Sanskrit, this verse is an example of the games of the learned. The revered Kalidasa constructed this beautiful poem out of a meaningless string of sounds, in the competition of Samasya Pooranam (समस्या-पूरणम्), organised by the great King Bhoj.
Such competitions were commonly organised by advocates of literature and scholarship, and Raja Bhoj is one of the most reknowned in this respect.
In the particular context of this subhashitam, Raja Bhoj gives a seemingly non-sensical line 'tham tham thatham tham thathatham thatham thah' as a challenge for the assembly of intellectuals gathered in his court, and this subhashitam is the clever solution of Kalidasa to it.
`,
      wordByWord: `राज्याभिषेके In the grand coronation ceremony of the king  ,
हेम-घटः च्युतः   the golden pot fell away
मदविह्वलायाः तरुण्याः हस्तात् from the hands of an excited young girl (so excited about the coronation ceremony that she was not in her senses)  ,
सोपानम् आसाद्य करोति शब्दम् and upon reaching the stairs produced the sound   -
ठं ठं ठठं ठं ठठठं ठठं ठः   "tham tham thatham tham thathatham thatham thah"!!
`
    },

    {
      title: "Synonyms",
      shloka: `अम्बा कुप्यति तात मूर्ध्नि विधृता गङ्गेयमुत्सृज्य ताम्
विद्वन् षण्मुख सन्ततम् मयि रता तस्याः गतिः का वद |
कोपाटोपवशाद् विवृद्धवदनः प्रत्युत्तरम् दत्तवान्
अम्बोधिर्जलधिर्पयोधिरुधधिर् वारांनिधिर्वारिधिः ||`,
      audio: am,
      meaning: `This shloka reveals the grandeur of Sanskrit language through the immense wealth of wisdom filled within each word of it. The richness of the language is evident from the number of synonyms a word has, wherein each synonym has its own purpose.
It's a fact that, in Sanskrit, there is no such thing as a definition for a word; but, rather a word for a definition. Any particular word has its definition hidden within its own self, sometimes conveying deeper meaning than seems to be.
Apparaently, this shloka too is part of a Samasya Pooranam, in which six synonyms of ocean are given as the last/problem line. These six words are actually derivatives of the synonyms of water, for eg., जल is water, and adding धि to it, it becomes reservoir of water. Likewise, adding ज to it, जलज means lotus; and adding द, जलद means water-giver (cloud).
The poets cleverly exhibits his knowledge of the Puranas along with his intellect, by showing a conversation between Lord Shiva and his son, Lord Kartik. The poet also skillfully makes use of the Śārdūlavikrīḍitam (शार्दूलविक्रीडितम्) meter..
`,
      wordByWord: `तात, अम्बा कुप्यति "O Father, mother is angry,"
मूर्ध्नि विधृता गङ्गा इयम्, उत्सृज्य ताम् "Throw away the Ganga who is held atop your head (due to whom mother is angry)."
विद्वन् षण्मुख "O my learned six-headed,"
सन्ततम् मयि रता "The one who stays on me continuously,"
तस्याः गतिः का वद "Tell me, where will she go?" (literally, what will be her pace; but as usual, the figurative meaning is sensible)
कोप-आटोप-वशाद् विवृद्ध-वदनः The one whose face was swelled by anger and pride (Lord Kartik)
प्रत्युत्तरम् दत्तवान् gave a back-answer,
अम्बोधिर्जलधिर्पयोधिरुधधिर् वारांनिधिर्वारिधिः "Ambodhi Jaladhi Payodhi Udhadhi Varamnidhi Varidhi!!!" (Six words through six mouths conveying same meaning - to the ocean!)
`
    },

    {
      title: "Alliteration",
      shloka: `विभूषितानङ्गरिपूत्तमाङ्गा
सद्यः कृतानेकजनार्तिभङ्गा |
मनोहरोत्तुङ्गचलत्तरङ्गा
गङ्गा ममाङ्गान्यमलीकरोतु ||`,
      audio:vibhooshita,
      meaning: `This shloka is part of Ganga-Lahari (Waves of Ganga), composed by Pandit Jagannath.
The story behind this famous composition is as interesting as the essence of the shloka itself. Pandit Jagannath, when faced with a terrible crisis, decides to please Mother Ganga by singing verses in her praise. He composes 52 shlokas there and then on the banks of Ganga, and with each shloka, she (Mother Ganga) rises one step. Eventually, the great pandit becomes one with her, that is, he dies a noble death.
This particular shloka, composed in the viparītākhyānikī (विपरीताख्यानिकी) meter, is the 52nd shloka of Ganga-Lahari, and exemplifies the genius of Pandit Jagannath. The repetition of the ङ्ग sound is the key feature - the literary device of alliteration is used, but the arrangement of the adjectives used for Ganga is the true beauty; remember he was doing it extempore!
`,
      wordByWord: `विभूषिता अनङ्ग-रिपु-उत्तम-अङ्गा The one who adorns the upper-most part of the enemy of Ananga [Lord of Kama], that is, the one who adorns the head of Lord Shiva!
सद्यः कृता अनेक-जन-आर्ति-भङ्गा The one who immediately destroys multiple griefs of people,
मनोहरा उत्तुङ्ग-चलत्तरङ्गा The one whose huge waves are delightful,
गङ्गा मम अङ्गानि अमली-करोतु O Ganga, make my parts (of the body) clean/pure.
`
    }


  
  ];

  const toggleMeaning = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleAudio = (index) => {
    const currentAudio = audioRefs.current[index];

    if (!currentAudio) return;

    if (playingIndex !== null && playingIndex !== index) {
      // Pause the previous one
      const previousAudio = audioRefs.current[playingIndex];
      previousAudio && previousAudio.pause();
    }

    if (currentAudio.paused) {
      currentAudio.play();
      setPlayingIndex(index);
    } else {
      currentAudio.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <div className="fun-container">
      <h1 className="fun-heading">Sanskrit for Fun!</h1>
      <p className="intro-line">
        Come let's see some witty and thought-provoking Subhashitas and their meanings.
        Click on a shloka to read more about it, and to listen to its melody.
      </p>

      {shlokas.map((shloka, index) => (
        <div key={index} className="cardd">
          <h2 className="card-title">{shloka.title}</h2>
          <p className="shloka">{shloka.shloka}</p>

          <div className="audio-section">
            <button className="audio-btn" onClick={() => toggleAudio(index)}>
              {playingIndex === index ? <FaPause /> : <FaPlay />}
              {playingIndex === index ? " Pause" : " Listen"}
            </button>
            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              src={shloka.audio}
              onEnded={() => setPlayingIndex(null)}
            />
          </div>

          <button className="toggle-btn" onClick={() => toggleMeaning(index)}>
            {expandedIndex === index ? "Hide Meaning" : "Show Meaning"}
            {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {expandedIndex === index && (
            <div className="meaning-content">
              <div className="meaning">
                <strong>Meaning:</strong>
                <p>{shloka.meaning}</p>
              </div>
              <div className="word-by-word">
                <strong>Word by Word:</strong>
                <p>{shloka.wordByWord}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SanskritFun;
