import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

import { useHistory } from "react-router-dom";

function SignedInNavbar({ userID, setUserID }) {
    // get name from database, using the userID

    let dummyName = "Cade Gouldthorpe";
    // hard coded value for now



    // for redirecting to home page
    let history = useHistory();

    const handleClick = () => {
        // set user id back to "", and redirect to homepage

        setUserID("");
        history.push("/");

        // lol if you just press back on your browser it still takes you back to the previous page
        // should probably fix that, make it log out properly instead of just redirecting to homepage
    }

    return (
        <Navbar collapseOnSelect expand="md" className="navbar navbar-dark bg-primary">
            <LinkContainer to={`/personal/home/${userID}`}>
            <Navbar.Brand className="font-weight-bold navbarBrand">
                Block Marketplace
            </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{color: "white", paddingRight: "10px"}} >
                Signed in as: {dummyName}
            </Navbar.Text>
            <Nav activeKey={window.location.pathname}>
                <Button variant="outline-light" onClick={handleClick}>Logout</Button>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default SignedInNavbar;
