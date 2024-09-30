import React from "react";
import styles from "./Linha.module.css"
import linha from "../../assets/linha.png"

const Linha = () => {
    return(
        <div className={styles.container}>
            <img src={linha} alt="" />
        </div>
    )
}

export default Linha;