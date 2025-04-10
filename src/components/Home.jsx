import React from "react"
import styles from "./styles/Home.module.css"
import Activity from "./RecentActivity"

const About = () => {
    return (
        <section className={styles["grid-container"]}>
            <div className={styles.section}>
                <div className="heading-section">
                    <h1>ABOUT US</h1>
                    <span className="strip"></span>
                </div>

                <p>संस्कृत-मण्डलः संस्कृतभाषायाः पुनरुत्थानस्य च संवर्धनस्य कृते एकः उपक्रमः वर्तते ।</p>

                <p>The Sanskrit Club is an initiative to revive and promote the bedrock for the growth of a large part of the glorious Indian Civilisation, the Sanskrit language.</p>
            </div>

            <div className={styles.section}>
                <div className={styles["grid-wrapper"]}>
                    <h1 className={styles.box}>नमो नमः! <br /> NAMO NAMAH!</h1>
                    <span className={styles.box + " " + styles.bluish}></span>
                </div>

                <div className={styles["grid-wrapper"]}>
                    <h1 className={styles.box}>संस्कृत-मण्डले सुस्वागतम् <br /> Welcome to Sanskrit Club</h1>
                    <span className={styles.box + " " + styles.brownish}></span>
                </div>
            </div>
        </section>
    )
}

const Announcements = () => {
    return (
        <section className={styles["grid-container"]}>
            <div className={styles.section}>
                <p className="text-center">जाड्यं धियो हरति सिंचति वाचि सत्यं,<br />
                    मानोन्नतिं दिशति पापमपाकरोति |<br />
                    चेतः प्रसादयति दिक्षु तनोति कीर्तिं,<br />
                    सत्संगतिः कथय किं न करोति पुंसाम् ||</p>

                <div className={styles.para}>(अच्छे मित्रों का साथ बुद्धि की जड़ता को हर लेता है, वाणी में सत्य का संचार करता है, मान और उन्नति को बढ़ाता है और पाप से मुक्त करता है| चित्त को प्रसन्न करता है और हमारी कीर्ति को सभी दिशाओं में फैलाता है |आप ही कहें कि सत्संगति मनुष्यों के भले के लिये क्या नहीं करती!)</div>
            </div>

            <div className={styles.section}>
                <div className="heading-section">
                    <h1>ANNOUNCEMENTS</h1>
                    <span className="strip"></span>
                </div>

                <div className={styles.announcement}>

                    <span className={styles.box + " " + styles.brownish}></span>
                    <p className={styles.box}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae odio ut
                        nisi mattis tempus non porta urna. Donec in dictum libero. Curabitur
                        pellentesque urna semper magna venenatis placerat.psum</p>
                    
                        
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <>
            <About />

            <Announcements />

            <Activity />

      
        </>
    )
}

export default Home;