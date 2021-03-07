import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from "../../api"
import "../../styles/Login.css";

import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

function Signup({ userID, setUserID }) {
    const [email, setEmail] = useState("rohit@ucla.com");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    // for redirecting to personal page on submission
    let history = useHistory();
  
    function validateForm() {
      return email.length > 0 && password.length > 0;

      // rohit said he will validate the form
    }
  
    function handleSubmit(event) {
      event.preventDefault();

      const payload = {email, password};
      console.log(payload);

      if(password === confirmPassword){
        api.insertUser(payload).then(res => {
          window.alert(`User inserted successfully`)
        })
      } else {
        window.alert(`Passwords don't match, try again`)
      }

      // get the user ID from the database, and call setUserID on it
      // hard coding a value for now
      let dummyUserID = "111222333"
      setUserID(dummyUserID);

      // redirects to personal page
      history.push(`/personal/home/${dummyUserID}`);
    }


  const handleEmailChange = (event) => {
      setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
      setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleNameChange = (event) => {
      setName(event.target.value);
  }

  const handleYearChange = (event) => {
      setYear(event.target.value);
  }

  const handleBirthdayChange = (event) => {
      setBirthday(event.target.value);

      // rohit said he will provide date validation 
  }

  const handleAddressChange = (event) => {
      setAddress(event.target.value);
  }

  const handlePhoneChange = (event) => {
      setPhone(event.target.value);
  }


  
    return (
      <div className="Signup">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name" value={name} onChange={handleNameChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Year</Form.Label>
              <Form.Control as="select" value={year} onChange={handleYearChange} >
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
              </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="text" placeholder="mm/dd/yyyy" value={birthday} onChange={handleBirthdayChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="currentUserAddress" value={address} onChange={handleAddressChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="13101234567" value={phone} onChange={handlePhoneChange} />
              <Form.Text className="text-muted">
                  Please enter number without parentheses or spaces or dashes.
              </Form.Text>
          </Form.Group>

          {/* <Button block size="lg" type="submit" disabled={!validateForm()}>
          <a href="/login" style={{color:"white"}}>Signup </a>
          </Button> */}
          <Button block size="lg" variant="primary" type="submit" disabled={!validateForm()}>Signup</Button>
        </Form>
      </div>
    );

}


export default Signup;
