import './App.css'
import NavBar from './components/NavBar'
import ContactView from './views/ContactView'
import CategoryView from './views/CategoryView'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from "./components/Cart";
import HomeView from './views/HomeView'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
  path="/"
  element={
    <>
      <HomeView />
      <ItemListContainer />
    </>
  }
/>

        <Route path="/contact" element={<ContactView />} />
        <Route path="/category/:catName" element={<CategoryView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>

      <footer>Elysium Store - Derechos reservados - 2025</footer>
    </BrowserRouter>
  );
}

export default App;

