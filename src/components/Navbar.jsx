import React, { useEffect, useState, useRef } from "react";
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
        href: "/team"
    }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navbarRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }

        const handleScroll = () => {
            if (window.scrollY > navbarHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navbarHeight]);
    useEffect(() => {
        function handleResize() {
            console.log(window.innerWidth)

            if (window.innerWidth >= 992) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return window.removeEventListener('resize', handleResize)
    })

    return (
        <nav ref={navbarRef} className={isSticky ? "nav-sticky" : ""}>
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