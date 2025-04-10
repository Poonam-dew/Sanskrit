import React from "react"
import styles from "./styles/RecentActivity.module.css"
import { SiGmail } from "react-icons/si"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { useEffect } from 'react';

const socials = [
    {
        href: "sanskritclub@gmail.com",
        icon: SiGmail
    },
    {
        href: "https://www.facebook.com/sanskritiitr/",
        icon: FaFacebook
    },
    {
        href: "https://www.instagram.com/sanskrit_club/?hl=en",
        icon: FaInstagram
    },
    {
        href: "https://www.linkedin.com/company/sanskrit-club-iit-roorkee/posts/?feedView=all",
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
    useEffect(() => {
        // Load the Instagram embed script when the component mounts
        const script = document.createElement('script');
        script.setAttribute('src', 'https://www.instagram.com/embed.js');
        script.setAttribute('async', '');
        document.body.appendChild(script);

        const twScript = document.createElement('script');
        twScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        twScript.setAttribute('async', '');
        document.body.appendChild(twScript);
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.touch}>
                <h1>GET IN TOUCH</h1>
                <div className={styles.icons}>
                    {
                        socials.map(({ href, icon }, key) => (
                            <a className={styles.icon} href={href} key={key}>
                                {React.createElement(icon)}
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Activity;