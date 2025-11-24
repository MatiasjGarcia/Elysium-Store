import "./NavBar.css";
import ButtonGeneric from "./ButtonGeneric"
import Carrito from "./Carrito";
import ItemListContainer from "./ItemListContainer";

export default function NavBar() {
    return (
        <nav className="nav-container">
            <ButtonGeneric name="Inicio" />
            <ButtonGeneric name="Indumentaria" />
            <ButtonGeneric name="Contactos" />
            <Carrito/>
        </nav>
    )
}