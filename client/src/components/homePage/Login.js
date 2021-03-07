import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from "../../api"
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

      const user = api.getUserByEmail(email);

      user.then((value) => {
        if(value.data.data != null) {
            if(password === value.data.data.password){
            setUserID(value.data.data._id);
            console.log(value.data.data._id);
            // redirects to homepage
            history.push(`/personal/home/${value.data.data._id}`);
          } else {
            window.alert("Not valid password, try again");
          }
        } else {
          window.alert("Not valid username, try again");
        }
    });
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
