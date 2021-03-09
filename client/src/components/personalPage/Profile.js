import React, {useState, useEffect} from "react";
import "../../styles/Profile.css";


import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from "../../api"

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import { useHistory } from "react-router-dom";

function Profile({ userID, setUserID }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [birthday, setBirthday] = useState("");
    const [phone, setPhone] = useState("");

    let history = useHistory();

    useEffect(() => {
        const getUser = async () => {
            await api.getUserById(userID).then(user => {
                console.log(user.data.data)
                const oldInfo = user.data.data;
                setEmail(oldInfo.email);
                setPassword(oldInfo.password);
                setConfirmPassword(oldInfo.password);
                setName(oldInfo.name);
                setYear(oldInfo.year);
                setBirthday(oldInfo.birthday);
                setPhone(oldInfo.phone);
            })
        }
        getUser();
    }, [])


    function handleSubmit(event) {
        event.preventDefault();
        const payload = {email, password, name, year, birthday, phone};
        console.log(payload);

        if(password === confirmPassword){
            api.updateUserById(userID, payload).then(res => {
                window.alert(`User updated successfully`);
                history.push(`/personal/home/${userID}`);
            })
        } else {
            window.alert("Passwords don't match, try again!");
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
      <div className="profile">
        <h1>Profile</h1>

        <div className="profileForm">
            {/*<Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" value={email} onChange={handleEmailChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="inputBoxes" type="password" placeholder="" value={password} onChange={handlePasswordChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="" value={name} onChange={handleNameChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Year</Form.Label>
                    <Form.Control as="select" className="inputBoxes" value={year} onChange={handleYearChange} >
                    <option>Freshman</option>
                    <option>Sophomore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control className="inputBoxes" type="text" placeholder="mm/dd/yyyy" value={birthday} onChange={handleBirthdayChange} />

                    {/* <Form.Row className="align-items-center">
                        <Col sm={4} className="my-1">
                            <Form.Control as="select" className="inputBoxes">
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                            </Form.Control>
                        </Col>
                        <Col sm={3} className="my-1">
                            <Form.Control as="select" className="inputBoxes">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </Form.Control>
                        </Col>
                        <Col sm={3} className="my-1"> 
                            <Form.Control type="text" placeholder="year" className="inputBoxes"/>
                        </Col>
                    </Form.Row> 
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control className="inputBoxes" type="text" placeholder="13101234567" value={phone} onChange={handlePhoneChange} />
                    <Form.Text className="text-muted">
                        Please enter number without parentheses or spaces or dashes.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Change profile picture" />
                </Form.Group>

                <Button variant="primary" type="submit">Save changes</Button>
                <div className="divider"/>
                <Button variant="primary" type="submit">Cancel</Button>
            </Form>
            */}

        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <p>{email}</p>
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
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
              type="password" required
              minLength="8"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" value={name} onChange={handleNameChange} required/>
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
              <Form.Control type="date" value={birthday} min="1940-07-04" max="2021-12-31" onChange={handleBirthdayChange} required />
          </Form.Group>
          {/* <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="currentUserAddress" value={address} onChange={handleAddressChange} />
          </Form.Group> */}
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" value={phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handlePhoneChange} required/>
              <Form.Text className="text-muted">
                  Format: 123-456-7890
              </Form.Text>
          </Form.Group>

          {/* <Button block size="lg" type="submit" disabled={!validateForm()}>
          <a href="/login" style={{color:"white"}}>Signup </a>
          </Button> */}
          <Button block size="lg" variant="primary" type="submit">Submit</Button>
        </Form>
        </div>
      </div>
  );
}

export default Profile;