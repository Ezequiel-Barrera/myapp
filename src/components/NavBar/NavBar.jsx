import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/image/logo.jpg'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
        <header>
            <div className='logo'>
                <Link to="/" >
                    <img src={logo} alt="logo" width="130" />
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/categoria/Procesadores">Procesadores</Link>
                </li>
                <li>
                    <Link to="/categoria/Placas-de-video">Placas de Video</Link>
                </li>
            </ul>
            <CartWidget />
        </header>
        </>
    )
}

export default NavBar
