import React from "react";
import styles from './Header.module.css'
import carro from "../../assets/carro.png"
import core from "../../assets/core.png"

function Header(){
    return (
        <>
        <header className={styles.cabecalho}>
                <h2>Exclusive</h2>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign Up</li>
                    </ul>
                </nav>
                <div className={styles.shop}>
                    <div className={styles.busca}>
                        <input type="text" name="" placeholder='What are you looking for?'/>
                    </div>
                    <div className={styles.icones}>
                        <img className={styles.core} src={core} alt="" />
                        <img className={styles.carro} src={carro} alt=""/>
                    </div>
                </div>
        </header>
        </>
    )
}

export default Header;