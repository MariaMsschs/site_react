// import { useState } from 'react'
// import styles from "./App.module.css"
import React from "react";
import Header from "./components/Header/Header_a.jsx"
import Promo from "./components/Promo/Promo_a.jsx"
import Hero from "./components/Hero/Hero.jsx";
import Subtitle from "./components/Subtitle/Subtitle.jsx";
import SectionBar from "./components/SectionBar/SectionBar.jsx"
import Product from "./components/product/product.jsx"
import Botao from "./components/botao/botao.jsx"
import Timer from "./components/Timer/Timer.jsx"
import Linha from "./components/Linha/Linha.jsx"
import Categories from "./components/Categories/Categories.jsx";
import Setas from "./components/Setas/Setas.jsx"
import BotaoLateral from "./components/BotaoLateral/BotaoLateral.jsx"
import Grid from "./components/Grid/Grid.jsx"

import produto1 from "./assets/produto.png"
import produto2 from "./assets/produto2.png"
import produto3 from "./assets/produto3.png"
import produto4 from "./assets/produto4.png"
import celular from "./assets/celular.png"
import hero from "./assets/hero.png";
import hero2 from "./assets/hero2.png";

function App() {
const sub1 = "Today's"
const sub2 = "Categories"
const sub3 = "This Month"
const sub4 = "Our Products"
const sub5 = "Featured"
const titulo1 = "Flash Sales"
const titulo2 = "Browse By Category"
const titulo3 = "Best Selling Products"
const titulo4 = "Explore Our Products"
const titulo5 = "New Arrival"
const tituloproduto = "HAVIT HV-G92 Gamepad"
const tituloproduto2 = "AK-900 Wired Keyboard"
const tituloproduto3 = "IPS LCD Gaming Monitor"
const tituloproduto4 = "S-Series Comfort Chair"
const preco = "R$ 189,90"
const botao = "View all products"
const botao2 = "View all"
const word1 = "Phones"
  return (
    <>  
      <Promo/>
      <Header/>

      <Hero img={hero}/>

      <Subtitle sub = {sub1}/>
      <SectionBar titulo = {titulo1}/>
      <Setas/>
      <Timer/>
      <Product produtosrc1 = {produto1} titulo_produto1 = {tituloproduto} preco1={preco}  produtosrc2 = {produto2} titulo_produto2 = {tituloproduto2} preco2={preco}  produtosrc3 = {produto3} titulo_produto3 = {tituloproduto3} preco3={preco}  produtosrc4 = {produto4} titulo_produto4 = {tituloproduto4} preco4={preco}/>
      <Botao titulo={botao}/>
      
      <Linha/>

      <Subtitle sub = {sub2}/>
      <SectionBar titulo = {titulo2}/>
      <Setas/>
      <Categories img1={celular} word1={word1} img2={celular} word2={word1} img3={celular} word3={word1} img4={celular} word4={word1} img5={celular} word5={word1} img6={celular} word6={word1}/>
      
      <Linha/>

      <Subtitle sub = {sub3}/>
      <SectionBar titulo = {titulo3}/>
      <BotaoLateral titulo={botao2}/>
      <Product produtosrc1 = {produto1} titulo_produto1 = {tituloproduto} preco1={preco}  produtosrc2 = {produto2} titulo_produto2 = {tituloproduto2} preco2={preco}  produtosrc3 = {produto3} titulo_produto3 = {tituloproduto3} preco3={preco}  produtosrc4 = {produto4} titulo_produto4 = {tituloproduto4} preco4={preco}/>

      <Hero img={hero2}/>

      <Subtitle sub = {sub4}/>
      <SectionBar titulo = {titulo4}/>
      <Setas/>
      <Product produtosrc1 = {produto1} titulo_produto1 = {tituloproduto} preco1={preco}  produtosrc2 = {produto2} titulo_produto2 = {tituloproduto2} preco2={preco}  produtosrc3 = {produto3} titulo_produto3 = {tituloproduto3} preco3={preco}  produtosrc4 = {produto4} titulo_produto4 = {tituloproduto4} preco4={preco}/>
      <Product produtosrc1 = {produto1} titulo_produto1 = {tituloproduto} preco1={preco}  produtosrc2 = {produto2} titulo_produto2 = {tituloproduto2} preco2={preco}  produtosrc3 = {produto3} titulo_produto3 = {tituloproduto3} preco3={preco}  produtosrc4 = {produto4} titulo_produto4 = {tituloproduto4} preco4={preco}/>
      <Botao titulo={botao}/>

      <Subtitle sub = {sub5}/>
      <SectionBar titulo = {titulo5}/>
      <Grid/>
    </>
  );
}

// <div className={styles.ret}>View All Products</div>

export default App;