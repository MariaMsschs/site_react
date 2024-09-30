import React from "react";
import styles from "./Footer.module.css"
import img from "../../assets/Footer.png"


function Footer() {
    return (
        <div className={styles.container}>
            <img className={styles.footer} src={img} alt="" />
        </div>
    )
}

export default Footer;