import React from "react";
import styles from "./Timer.module.css"

const Timer = () => {
    return(
        <div className={styles.timer}>
            <div>
                <p className={styles.indice}>Days</p>
                <h1 className={styles.valor}>03</h1>
            </div>
            <p className={styles.separador}>:</p>
            <div>
                <p className={styles.indice}>Hours</p>
                <h1 className={styles.valor}>23</h1>
            </div>
            <p className={styles.separador}>:</p>
            <div>
                <p className={styles.indice}>Minutes</p>
                <h1 className={styles.valor}>19</h1>
            </div>
            <p className={styles.separador}>:</p>
            <div>
                <p className={styles.indice}>Seconds</p>
                <h1 className={styles.valor}>56</h1>
            </div>
        </div>
    )
}

export default Timer;