import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import imagenLogo from '../../assets/image/imagenLogo.jpg'

const NavBar = () => {
    return (
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
    )
}

export default NavBar