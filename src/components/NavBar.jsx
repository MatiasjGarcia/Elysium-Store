import { Link } from 'react-router-dom';
import Carrito from './Carrito';
import './NavBar.css'
import ContactView from '../views/ContactView';
import CategoryView from '../views/CategoryView';

export default function NavBar() {
    return (
        <>
            <nav className='NavBarStyle'>
                <Link to="/">
                    <button>
                        <img
                            className="LogoStyle" src="/logo-Elysium.png" alt="logo" />
                    </button>
                </Link>

                <button>
                    <Link to="/category/FITNESS">FITNESS</Link>
                </button>

                <button>
                    <Link to="/category/CASUAL">CASUAL</Link>
                </button>

                <button>
                    <Link to="/contact">
                        <img
                            style={{ width: 90 }}
                            src="https://static.vecteezy.com/system/resources/previews/002/205/854/non_2x/email-icon-free-vector.jpg"
                            alt="contact"
                        />
                    </Link>
                </button>
                <Carrito />
            </nav>
        </>
    );
}