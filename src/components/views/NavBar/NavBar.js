import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark" className="rounded my-4">
            <Container>
                <Navbar.Text>Waiter.app</Navbar.Text>
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>   
    )
};

export default NavBar;