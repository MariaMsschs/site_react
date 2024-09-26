import React from "react";
import styles from "./product.module.css"
import estrelinhas from "../../assets/stars.png"

const product = ({produtosrc, titulo_produto, preco}) => {
    return(
        <div className={styles.container}>
            
            <div className={styles.produto}>
                <img className={styles.imgProduto} src={produtosrc} alt="" />
                <p className={styles.titulo_produto}>{titulo_produto}</p>
                <p className={styles.preco}>{preco}</p>
                <img src={estrelinhas} alt="" />
            </div>

            <div className={styles.produto}>
                <img className={styles.imgProduto} src={produtosrc} alt="" />
                <p className={styles.titulo_produto}>{titulo_produto}</p>
                <p className={styles.preco}>{preco}</p>
                <img src={estrelinhas} alt="" />
            </div>
            
            <div className={styles.produto}>
                <img className={styles.imgProduto} src={produtosrc} alt="" />
                <p className={styles.titulo_produto}>{titulo_produto}</p>
                <p className={styles.preco}>{preco}</p>
                <img src={estrelinhas} alt="" />
            </div>

            <div className={styles.produto}>
                <img className={styles.imgProduto} src={produtosrc} alt="" />
                <p className={styles.titulo_produto}>{titulo_produto}</p>
                <p className={styles.preco}>{preco}</p>
                <img src={estrelinhas} alt="" />
            </div>
        </div>
    )
}

export default product;