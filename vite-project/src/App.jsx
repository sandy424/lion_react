import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Main>
      <Product name="슈핀 앙고라 퍼 슬림핏 라운드 긴팔 티셔츠" price="19,710원" />
      <Product name="[포근기모/여리핏] 리나 기모 오프숄더 긴팔 티셔츠 (4color)" price="14,900원" />
      <Product name="언제나 입을 수 있는 니트" price="12,000원" />
      </Main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;