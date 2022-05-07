import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">Quick MiniBuy Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/">Sobre Nosotros</Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <Link to="/categoria/Procesadores">Procesadores</Link>
                <NavDropdown.Divider />
                    <Link to="/categoria/Placas-de-video">Placas de Video</Link>
                <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Todas las Categorias</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            <CartWidget />
        </Container>
        </Navbar>
    )
}

export default NavBar