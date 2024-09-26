import React from "react";
import hero from "../../assets/hero.png";
import styles from './Hero.module.css';

const Hero = () => {
    return <div className={styles.hero}>
        <img src={hero} alt="" />
    </div>;
};

export default Hero;