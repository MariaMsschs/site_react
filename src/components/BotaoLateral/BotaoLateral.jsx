import React from "react";
import styles from "./BotaoLateral.module.css"

const BotaoLateral = ({titulo}) => {
    return(
        <div className={styles.container}>
            <div className={styles.botao}>
                <p>{titulo}</p>
            </div>
        </div>
    )
}

export default BotaoLateral;