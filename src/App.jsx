import './App.css'
import TituloPrincipal from './components/TituloPrincipal'
import NavBar from './components/NavBar'
import ButtonGeneric from './components/ButtonGeneric'
import ItemListContainer from "./components/ItemListContainer";

function App() {

  return (
    <>
    <NavBar/>
    <TituloPrincipal/>
            <div>
      <ItemListContainer saludo="¡Inspirado en mitos. Creado para vos.!" />
    </div>
    </>
  )
}

export default App
