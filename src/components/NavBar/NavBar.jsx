import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {
    return (
        <nav className='nav'>
            <label>Quick-miniBuy Store</label>
            <ul className='nava'>
                <li><a href='#'>Tortas Caseras</a></li>
                <li><a href='#'>Sandwich de Miga</a></li>
                <li><a href='#'>Alfajores y Conitos</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar