import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import imagenLogo from '../../assets/image/imagenLogo.jpg'

const NavBar = () => {
    return (
        <>
        <header>
            <a href="#">
                <div className="logo">
                    <Link to="/" >
                        <img src={imagenLogo} alt="logo" width="90" />
                    </Link>
                </div>
            </a>
            <Link to="/">Inicio</Link>
            <Link to="/categoria/Procesadores">Procesadores</Link>
            <Link to="/categoria/Placas-de-video">Placas de Video</Link>
            <CartWidget />
        </header>
        </>
    )
}

export default NavBar