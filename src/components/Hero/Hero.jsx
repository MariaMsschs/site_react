import React from "react";
import styles from './Hero.module.css';

const Hero = ({img}) => {
    return <div className={styles.hero}>
        <img src={img} alt="" />
    </div>;
};

export default Hero;