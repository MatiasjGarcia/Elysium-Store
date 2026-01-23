import { Link } from 'react-router-dom';
import './NavBar.css'
import CartWidget from "./CartWidget";



export default function NavBar() {
    return (
        <>
            <nav className='NavBarStyle'>
                <Link to="/">ELYSIUM</Link>

                <Link to="/category/hombre">Hombre</Link>

                <Link to="/category/mujer">Mujer</Link>

                <Link to="/contact">Contact</Link>

                <CartWidget />
            </nav>
        </>
    );
}