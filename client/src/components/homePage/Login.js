import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/Login.css";

import { useHistory } from "react-router-dom";

function Login({ userID, setUserID }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // for redirecting to personal page on submission
    let history = useHistory();
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
      event.preventDefault();

      // check the database to make sure the user has provided valid login credentials
      // if not, send an error message
      // if yes, get the userID from the database

      // get the user ID from the database, and call setUserID on it
      // hard coding a value for now
      let dummyUserID = "111222333"
      setUserID(dummyUserID);

      // redirects to personal page
      history.push(`/personal/home/${dummyUserID}`);
    }

    return (
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" variant="primary" type="submit" disabled={!validateForm()}>Login</Button>
        </Form>
      </div>
    );

}




export default Login;
