import React, { useEffect, useState } from "react";
import styles from "../components/styles/RecentActivity.module.css";
import Member from "../components/Member.js"; // Make sure Member is in a separate file or adjust accordingly
import Activity from "../components/RecentActivity.jsx";

const TeamPage= () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxg93L2IgEobgB4W65cOMU1TwQVk08G7a6xRtA0Kf-vW3ScQApaLho5CX5X_NzCNapU1g/exec") // Replace with your actual API URL
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setMembers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h1>OUR VOLUNTEERS</h1>
        <div className={styles.strip}></div>
      </div>

      <div id="itemsContainer">
      {members.map((member, index) => (
      <Member
        key={index}
        name={member.Name}
        branch={member.Branch}
        year={member.Year}
        img={member.ImgURL}
        gmail={member.GmailURL}  
      />
    ))}
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <div>
      <TeamPage />
      <Activity />
    </div>
  );
}

export default Team;
