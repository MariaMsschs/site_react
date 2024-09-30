import React from "react";
import styles from "./product.module.css"
import estrelinhas from "../../assets/stars.png"

const product = ({produtosrc1, titulo_produto1, preco1, produtosrc2, titulo_produto2, preco2, produtosrc3, titulo_produto3, preco3, produtosrc4, titulo_produto4, preco4}) => {
    return(
        <div className={styles.container}>
            <div className={styles.produto}>
                <img className={styles.imgProduto} src={produtosrc1} alt="" />
                <p className={styles.tituloProduto}>{titulo_produto1}</p>
                <p className={styles.preco}>{preco1}</p>
                <img src={estrelinhas} alt=""/>
            </div>
            <div className={styles.produto}>
                <img className={styles.imgProduto} src={produtosrc2} alt="" />
                <p className={styles.tituloProduto}>{titulo_produto2}</p>
                <p className={styles.preco}>{preco2}</p>
                <img src={estrelinhas} alt=""/>
            </div>
            <div className={styles.produto}>
                <img className={styles.imgProduto} src={produtosrc3} alt="" />
                <p className={styles.tituloProduto}>{titulo_produto3}</p>
                <p className={styles.preco}>{preco3}</p>
                <img src={estrelinhas} alt=""/>
            </div>
            <div className={styles.produto}>
                <img className={styles.imgProduto} src={produtosrc4} alt="" />
                <p className={styles.tituloProduto}>{titulo_produto4}</p>
                <p className={styles.preco}>{preco4}</p>
                <img src={estrelinhas} alt=""/>
            </div>
        </div>
    )
}

export default product;