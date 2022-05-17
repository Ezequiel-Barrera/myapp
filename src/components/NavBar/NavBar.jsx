import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import imagenLogo from '../../assets/image/imagenLogo.jpg'

const NavBar = () => {
    return (
        <>
        {/* 
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img width="120" src={imagenLogo} alt="Logo Tienda" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                    <Link to="/categoria/Procesadores">Procesadores</Link>
                                <NavDropdown.Divider />
                                    <Link to="/categoria/Placas-de-video">Placas de Video</Link>
                                <NavDropdown.Divider />
                                    <NavDropdown.Item href="/">Todas las Categorias</NavDropdown.Item>
                                </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>
        */}
        <header>
            {/*<div className="menu">
                <box-icon name="menu"></box-icon>
            </div>*/}
            <a href="#">
                <div className="logo">
                    <img src={imagenLogo} alt="logo" width="90" />
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">CATEGORIAS</a>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>0</span>
            </div>
        </header>
        </>
    )
}

export default NavBar