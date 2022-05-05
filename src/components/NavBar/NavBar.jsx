import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Quick MiniBuy Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Categoria A</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Categoria B</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Categoria C</NavDropdown.Item>
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