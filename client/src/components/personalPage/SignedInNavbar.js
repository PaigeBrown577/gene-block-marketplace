import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import React, { useState, useEffect } from "react";
import api from "../../api"

import { useHistory } from "react-router-dom";

function SignedInNavbar({ user, setUser }) {
    const [name, setName] = useState("");

    useEffect(() => {
        if(user){
            setName(user.name);
        }
    }, [])


    // for redirecting to home page
    let history = useHistory();

    const handleClick = () => {
        // set user id back to "", and redirect to homepage

        setUser(null);
        history.push("/");

        // lol if you just press back on your browser it still takes you back to the previous page
        // should probably fix that, make it log out properly instead of just redirecting to homepage
    }

    return (
        <Navbar collapseOnSelect expand="md" className="navbar navbar-dark bg-primary">
            <LinkContainer to={`/personal/home/${user ? user._id : ""}`}>
            <Navbar.Brand className="font-weight-bold navbarBrand">
                Block Marketplace
            </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{color: "white", paddingRight: "10px"}} >
                Signed in as: {name}
            </Navbar.Text>
            <Nav activeKey={window.location.pathname}>
                <Button variant="outline-light" onClick={handleClick}>Logout</Button>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default SignedInNavbar;
