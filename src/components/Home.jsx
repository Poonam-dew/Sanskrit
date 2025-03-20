import React from "react"
import styles from "./styles/Home.module.css"

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
                    <h2 className={styles.box}>नमो नमः! <br /> NAMO NAMAH!</h2>
                    <span className={styles.box + " " + styles.bluish}></span>
                </div>

                <div className={styles["grid-wrapper"]}>
                    <h2 className={styles.box}>संस्कृत-मण्डले सुस्वागतम् <br /> Welcome to Sanskrit Club</h2>
                    <span className={styles.box + " " + styles.brownish}></span>
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <>
            <About />
        </>
    )
}

export default Home;