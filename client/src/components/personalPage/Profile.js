import React, {useState, useEffect} from "react";
import "../../styles/Profile.css";

import { Avatar } from "@material-ui/core";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from "../../api"
import swal from 'sweetalert';

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import { useHistory } from "react-router-dom";

function Profile({ user, setUser, posts, setPosts }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [birthday, setBirthday] = useState("");
    const [phone, setPhone] = useState("");

    let fileInput = React.createRef();


    let history = useHistory();

    useEffect(() => {
        setEmail(user.email);
        setPassword(user.password);
        setConfirmPassword(user.password);
        setName(user.name);
        setYear(user.year);
        setBirthday(user.birthday);
        setPhone(user.phone);
    }, [])



    function handleSubmit(event) {
        event.preventDefault();
        const payload = {email, password, name, year, birthday, phone};
        // console.log(payload);

        // console.log(imageURL);

        if(password === confirmPassword){
            api.updateUserById(user._id, payload).then(res => {
               swal("Profile updated!", "", "success");
                history.push(`/personal/home/${user._id}`);
            })
        } else {
            swal("Passwords don't match, try again!", "", "error");
        }
      }

// colbert says he stills need to handle file submission

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleBirthdayChange = (event) => {
        setBirthday(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
      }



  return (
    //   <div className="float-container">
<div className="profile">
        <div className="card_wrapper">
        <div className="card">
        {/* style={{marginRight: spacing + 'em'}} */}
          <div className="d-flex align-items-center">
            <div className="post__avatar"><Avatar src="../../bruin_logo.jpg" /></div>  
             <div className="ml-3 w-100">
                <div className="mb-0 mt-0"><font size="6" className="cardname">{name}</font></div> 
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                      <div className="d-flex flex-column"> <span className="year">Year</span><font size="3">{year}</font></div>
                      <div className="d-flex flex-column"> <span className="phone_number">Phone Number</span><font size="3">{phone}</font> </div>
                      <div className="d-flex flex-column"> <span className="email">Email</span><font size="3">{email}</font></div>
                  </div>
                  <div className="button mt-2 d-flex flex-row align-items-center"> <button className="btn btn-sm btn-outline-primary w-100">Message</button> <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
              </div>
          </div>
          </div>
      </div>

      <h1 className="title_profile">Your Profile</h1><h1 className="title_profile">Change Your Profile</h1>

        <div className="profileForm">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <p>{email}</p>
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="inputBoxes"
              type="password" required
              value={password}
              onChange={handlePasswordChange}
            />
            <Form.Text className="text-muted">
                Minimum 8 characters
            </Form.Text>
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              className="inputBoxes"
              type="password" required
              minLength="8"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control className="inputBoxes" type="text" placeholder="Name" value={name} onChange={handleNameChange} required/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Year</Form.Label>
              <Form.Control className="inputBoxes" as="select" value={year} onChange={handleYearChange} >
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
              </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Birthday</Form.Label>
              <Form.Control className="inputBoxes" type="date" value={birthday} min="1940-07-04" max="2021-12-31" onChange={handleBirthdayChange} required />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control className="inputBoxes" type="tel" value={phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handlePhoneChange} required/>
              <Form.Text className="text-muted">
                  Format: 123-456-7890
              </Form.Text>
          </Form.Group>
          {/* <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Change Profile Picture" ref={fileInput} />
          </Form.Group> */}
          <Button block size="lg" variant="primary" type="submit">Submit</Button>
        </Form>
        </div>

</div>

  );
}

export default Profile;



