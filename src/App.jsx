// import { useState } from 'react'
// import styles from "./App.module.css"
import React from "react";
import Header from "./components/Header/Header_a.jsx"
import Promo from "./components/Promo/Promo_a.jsx"
import Hero from "./components/Hero/Hero.jsx";
import Subtitle from "./components/Subtitle/Subtitle.jsx";
import SectionBar from "./components/SectionBar/SectionBar.jsx"
import Product from "./components/product/product.jsx"
import produto from "./assets/produto.png"
import estrelinhas from "./assets/stars.png"

function App() {
const sub1 = "today's"
const titulo1 = "Flash Sales"
const tituloproduto = "HAVIT HV-G92 Gamepad"
const preco = "R$ 189,90"
  return (
    <>  
      <Promo/>
      <Header/>
      <Hero/>
      <Subtitle sub = {sub1}/>
      <SectionBar titulo = {titulo1}/>
      <Product produtosrc={produto} titulo_produto={tituloproduto} preco={preco}/>
    </>
  );
}

// <div className={styles.ret}>View All Products</div>

export default App;