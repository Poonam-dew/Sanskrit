import React, { useEffect, useState } from "react";
import IIT from '../assets/IIT.png';
import SLogo from '../assets/SLogo.png';
import styles from "./styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

const links = [
    {
        title: "home",
        href: "/"
    },
    {
        title: "events",
        href: "/events"
    },
    {
        title: "learning sanskrit",
        href: "/events"
    },
    {
        title: "courses",
        href: "/events"
    },
    {
        title: "shaastra setu",
        href: "/events"
    },
    {
        title: "resources",
        href: "/events"
    },
    {
        title: "meet the team",
        href: "/events"
    }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        function handleResize() {
            console.log(window.innerWidth)

            if (window.innerWidth >= 992) {
                setIsOpen(false)
            }
        }
        console.log(isOpen);

        window.addEventListener('resize', handleResize)

        return window.removeEventListener('resize', handleResize)
    })

    return (
        <nav>
            <div className={styles.navContainer}>
                <div className={styles.logoSection}>
                    <img src={IIT} alt="IITR" />
                    <span className={styles.whiteStrip}></span>
                    <img src={SLogo} alt="IITR" className={styles.sLogo} />
                </div>

                <ul className={styles.large}>
                    {
                        links.map(({ href, title }, key) => [
                            <li className={window.location.pathname === href ? styles.active : ""} key={key}>
                                <NavLink to={href}>{title}</NavLink>
                            </li>
                        ])
                    }
                </ul>

                <LuMenu className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <ul style={isOpen ? { display: "block" } : { display: "none" }} className={styles.small}>
                {
                    links.map(({ href, title }, key) => [
                        <li className={window.location.pathname === href ? styles.active : ""} key={key}>
                            <NavLink to={href}>{title}</NavLink>
                        </li>
                    ])
                }
            </ul>
        </nav >
    )
}

export default Navbar;