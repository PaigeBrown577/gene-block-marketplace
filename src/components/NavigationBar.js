import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

function NavigationBar() {
    return (
        <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
            <LinkContainer to="/">
            <Navbar.Brand className="font-weight-bold text-muted">
                Block Marketplace
            </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav activeKey={window.location.pathname}>
                <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
