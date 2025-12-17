import './App.css'
import NavBar from './components/NavBar'
import HomeView from './views/HomeView';
import ContactView from './views/ContactView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryView from './views/CategoryView';
import ProductDetail from './components/ProductDetail';

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<HomeView/>}/>
      <Route exact path="Contact" element={<ContactView/>}/>
      <Route exact path="Category/:catName" element={<CategoryView/>}/>
      <Route exact path="/product/:id" element={<ProductDetail />} />
    </Routes>
    <footer>Elysium Store - Derechos reservados - 2025</footer>
    </BrowserRouter>
    </>
  );
}

export default App
