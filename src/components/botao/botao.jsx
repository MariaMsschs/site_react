import React from "react";
import styles from "./botao.module.css"

const botao = ({titulo}) => {
    return(
        <div className={styles.container}>
            <div className={styles.botao}>
                <p>{titulo}</p>
            </div>
        </div>
    )
}

export default botao;