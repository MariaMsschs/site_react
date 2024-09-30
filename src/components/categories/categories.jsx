import React from "react";
import styles from "./Categories.module.css"


const Categories = ({img1, word1, img2, word2, img3, word3, img4, word4, img5, word5, img6, word6}) => {
    return (
        <div className={styles.categories}>
            <div className={styles.container}>
                <div className={styles.imagem}>
                    <img src={img1} alt=""/>
                </div>
                <p>{word1}</p>
            </div>

            <div className={styles.container}>
                <div className={styles.imagem}>
                    <img src={img2} alt=""/>
                </div>
                <p>{word2}</p>
            </div>

            <div className={styles.container}>
                <div className={styles.imagem}>
                    <img src={img3} alt=""/>
                </div>
                <p>{word3}</p>
            </div>

            <div className={styles.container}>
                <div className={styles.imagem}>
                    <img src={img4} alt=""/>
                </div>
                <p>{word4}</p>
            </div>

            <div className={styles.container}>
                <div className={styles.imagem}>
                    <img src={img5} alt=""/>
                </div>
                <p>{word5}</p>
            </div>

            <div className={styles.container}>
                <div className={styles.imagem}>
                    <img src={img6} alt=""/>
                </div>
                <p>{word6}</p>
            </div>
        </div>
    )
}

export default Categories;