import React, { useState } from 'react';
import '../Styles/Courses.css';
import Current from '../assets/Current.jpg';

const courses = [
  {
    id: 100,
    img: Current,
    heading: "SAṂSĀDHANĪ : PRAVEŚIKĀ",
    subheading: "Introduction to Saṃsādhanī - A toolkit for Sanskrit Computational Linguistics",
    info: [
      'A course organized as a collaboration between Sanskrit Club of IIT Roorkee and Team Samsaadhanii, University of Hyderabad.',
      'This course focuses on the use of Saṃsādhanī - an online computational toolkit for Sanskrit to understand any Sanskrit text.',
      'This course is designed for learners having intermediate knowledge of Vibhakti, Sandhi, and Kaaraka, gained through the completion of the Subhashitam Samskritam course or otherwise.'
    ],
    details: {
      overview: [
        "In this course, five tools from the Samsaadhanii toolkit viz. Sandhi joiner and splitter, word generator and analyser and sentence analyser, will be introduced.",
        "At the end of the course, the participants will be asked to read and understand 5 shlokas from some popular text such as Raghuvaṃśa and provide various grammatical analysis such as sandhi, word analysis and sentential analysis.",
        "This will generate a confidence in the participants that with the help of various online tools they can read and understand the original Sanskrit texts.",
        "Learning will occur in two modes - Lectures and Project.",
        "Module-wise evaluation through Multiple Choice Questions (MCQ) will carry 70% weightage, while project work will have 30% weightage of the total evaluation."
      ],
      materials: [
        { text: "Course study materials", link: "https://drive.google.com/drive/folders/1RsbqGy9rd_1V_c-wEwIwbK0ayp249uRE?usp=sharing" },
        { text: "Saṃsādhanī toolkit website (University server)", link: "http://sanskrit.uohyd.ac.in/scl" },
        { text: "Saṃsādhanī toolkit website (Cloud)", link: "http://scl.samsaadhanii.in/scl" }
      ]
    }
  }
];

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState(null);

  return (
    <div className="courses">
      <div className="main_container">
        {courses.map(course => (
          <div key={course.id} className="card_container">
            <h2 className="course_heading">Current Course</h2>
            <div className="course_card">
              <img src={course.img} className="course_img" alt="Course" />
              <div className="course_card_info">
                <h2 className="course_card_heading">{course.heading}</h2>
                <h3 className="course_card_subheading">{course.subheading}</h3>
                <ul className="courselinks">
                  {course.info.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <div className="knowbtn" onClick={() => setActiveCourse(course)}>
                  KNOW MORE
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeCourse && (
        <div className="coursemodal">
          <div className="know_more">
            <span className="close" onClick={() => setActiveCourse(null)}>✖</span>
            <h2>COURSE DETAILS</h2>
            <h3>Overview</h3>
            <ul className="knowlist">
              {activeCourse.details.overview.map((point, index) => <li key={index}>{point}</li>)}
            </ul>
            <h2>COURSE MATERIALS</h2>
            <h3>Feel free to access all the course materials here...</h3>
            <ul className="material_links">
              {activeCourse.details.materials.map((item, index) => (
                <li key={index}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a></li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
