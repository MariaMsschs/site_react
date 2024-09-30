import React from "react";
import styles from "./Setas.module.css"
import seta from "../../assets/seta_esquerda.png"
import seta2 from "../../assets/seta2.png"

const Setas = () => {
    return(
        <div className={styles.setas}>
            <div className={styles.circle}>
                <img className={styles.rotate} src={seta2} alt="" />
            </div>
            <div className={styles.circle}>
                <img className={styles.rotate} src={seta} alt="" />
            </div>
        </div>
    )
}

export default Setas;