import React from "react";
import styles from './Beneficios.module.css';

const Beneficios = ({img, titulo, desc}) => {
    return <div className={styles.container}>
        <div className={styles.beneficio}>
            <div className={styles.divimagem}><img className={styles.imagem} src={img} alt="" /></div>
            <div className={styles.info}>
                <p className={styles.titulo}>{titulo}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>

        <div className={styles.beneficio}>
            <div className={styles.divimagem}><img className={styles.imagem} src={img} alt="" /></div>
            <div className={styles.info}>
                <p className={styles.titulo}>{titulo}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>

        <div className={styles.beneficio}>
            <div className={styles.divimagem}><img className={styles.imagem} src={img} alt="" /></div>
            <div className={styles.info}>
                <p className={styles.titulo}>{titulo}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    </div>;
};

export default Beneficios;