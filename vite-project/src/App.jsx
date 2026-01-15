import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return(
    <>
      <Header/>
      <Main>
      <Product name="언제나 입을 수 있는 니트" price="12,000원" />
      <Product name="언제나 입을 수 있는 니트" price="12,000원" />
      <Product name="언제나 입을 수 있는 니트" price="12,000원" />
      </Main>
      <Footer/>
    </>
  )
}

export default App;