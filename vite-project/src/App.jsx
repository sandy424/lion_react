import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return(
    <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
    </Routes>
  )
}

export default App;