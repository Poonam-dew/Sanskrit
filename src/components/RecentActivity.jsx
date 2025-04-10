import React from "react"
import styles from "./styles/RecentActivity.module.css"
import { SiGmail } from "react-icons/si"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const socials = [
    {
        href: "",
        icon: SiGmail
    },
    {
        href: "",
        icon: FaFacebook
    },
    {
        href: "",
        icon: FaInstagram
    },
    {
        href: "",
        icon: FaLinkedin
    },
    {
        href: "",
        icon: FaXTwitter
    },
    {
        href: "",
        icon: FaYoutube
    }
]

const Activity = () => {
    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>RECENT ACTIVITY</h1>
                <div className={styles.strip}></div>
            </div>

            <div className={styles.grid}>
                <div className={styles.section}>
                    <div className={styles.title}><h2>FACEBOOK</h2></div>
                    <p></p>
                </div>

                <div className={styles.section}>
                    <div className={styles.title + " " + styles.title2}><h2>X / TWITTER</h2></div>
                    <p></p>
                </div>
            </div>

            <div className={styles.touch}>
                <h1>GET IN TOUCH</h1>

                <div className={styles.icons}>
                    {
                        socials.map(({ href, icon }, key) => {
                            return (<a className={styles.icon} href={href} key={key}>
                                {React.createElement(icon)}
                            </a>)
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Activity;