import React from "react";
import styles from "./styles/RecentActivity.module.css"

const Member = ({ img, name, branch, year, insta, linkedIn }) => {
    return (
        <div className="superContainer">
            <div className="containers">
                <div className="img">
                    <img src={img}
                        alt={name} className="generated_image" />
                </div>
                <div className="information">
                    <h1 className="information_heading">{name}</h1>
                    <p className="information_para">{branch} ({year} year)</p>
                    <div className="links">
                        <a href={insta ? insta : "#"} target="_blank" className="generated_link"><i className="fa-brands fa-instagram"
                            style={{ color: "black" }}></i></a>
                        <a href={linkedIn ? linkedIn : "#"} target="_blank" className="generated_link"><i className="fa-brands fa-linkedin"
                            style={{ color: "black" }}></i></a>
                    </div>
                </div>
            </div>
            <div className="name"><h4>{name}</h4></div>
        </div>
    )
}

const members = [
    {
        name: "Madhav Dhall",
        branch: "B.Tech. Energy Engineering",
        year: "1",
        img: ""
    },
    {
        name: "Madhav Dhall",
        branch: "B.Tech. Energy Engineering",
        year: "1",
        img: ""
    },
    {
        name: "Madhav Dhall",
        branch: "B.Tech. Energy Engineering",
        year: "1",
        img: ""
    },
    {
        name: "Madhav Dhall",
        branch: "B.Tech. Energy Engineering",
        year: "1",
        img: ""
    },
    {
        name: "Madhav Dhall",
        branch: "B.Tech. Energy Engineering",
        year: "1",
        img: ""
    },
    {
        name: "Madhav Dhall",
        branch: "B.Tech. Energy Engineering",
        year: "1",
        img: ""
    },
    {
        name: "Madhav Dhall",
        branch: "B.Tech. Energy Engineering",
        year: "1",
        img: ""
    },
    {
        name: "Madhav Dhall",
        branch: "B.Tech. Energy Engineering",
        year: "1",
        img: ""
    },

]

const Team = () => {
    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>OUR VOLUNTEERS</h1>
                <div className={styles.strip}></div>
            </div>

            <div id="itemsContainer">
                {
                    members.map(({ name, branch, year, img }, key) => {
                        return (
                            <Member name={name} branch={branch} year={year} img={img} key={key} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Team