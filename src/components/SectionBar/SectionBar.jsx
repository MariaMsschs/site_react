import React from "react";
import styles from "./SectionBar.module.css"
import seta from "../../assets/seta_esquerda.png"
import seta2 from "../../assets/seta2.png"

const SectionBar = ({titulo}) => {
    return(
        <div className={styles.container}>
            <h2 className={styles.titulo}>{titulo}</h2>
        </div>
    )
}

export default SectionBar;