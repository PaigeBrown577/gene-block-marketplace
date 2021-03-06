import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from "../../api"
import swal from 'sweetalert';

// import background from "../../colored_seal.jpeg"
// import "../colored_seal.jpeg";
// import logo from "../../styles/colored_seal.jpeg";

 import  "../../styles/Login.css";


import { useHistory } from "react-router-dom";

function Login({ user, setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // for redirecting to personal page on submission
    let history = useHistory();
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
      setPassword(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      const user = api.getUserByEmail(email);

        user.then((value) => {
          if(value.data.data != null) {
              if(password === value.data.data.password){
              setUser(value.data.data);
              // redirects to homepage
              history.push(`/personal/home/${value.data.data._id}`);
            } else {
              swal("Incorrect password, try again!", "", "error");
            }
          } else {
            swal("Not a valid username, try again!", "", "error");
          }
      });
    }

    return (
    <div className="background"> 
    <div className="Login"> 

      
        <h1 className="h1_login">Login</h1>

          <Form onSubmit={handleSubmit} style={{padding:20}}>
            <Form.Group className = "box" size="lg" controlId="email" >
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={handleChangeEmail}
              />
         </Form.Group>
            <Form.Group className = "box" size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
            </Form.Group>
            <Button block size="lg" variant="primary" type="submit" disabled={!validateForm()}>Login</Button>

          </Form> 
   
        <p className ="p_login">

        Don't have an account yet? <br />
            <a href="/signup">Click here!</a>
          </p>
    </div>
    </div>

    );

}




export default Login;
