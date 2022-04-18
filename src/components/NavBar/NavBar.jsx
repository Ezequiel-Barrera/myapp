import './NavBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <nav className='nav'>
            <label>Quick-miniBuy Store</label>
            <ul className='nava'>
                <li><a href='#'>Tortas Caseras</a></li>
                <li><a href='#'>Sandwich de Miga</a></li>
                <li><a href='#'>Alfajores y Conitos</a></li>
            </ul>
            <FontAwesomeIcon 
                icon={faCartShopping}
                className='btn-menu'
            />
        </nav>
    )
}

export default NavBar