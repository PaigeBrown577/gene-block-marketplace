import React, {useState} from "react";
import "../../styles/Settings.css";


import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from "../../api"

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

function Settings() {
    const [email, setEmail] = useState("rohit");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
  
        const payload = {email, password, name, year, birthday, address, phone};
        console.log(payload);
  
        api.updateUserById(payload).then(res => {
            window.alert(`User updated successfully`)
        })
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

        // rohit said he will provide date validation 
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

  return (
      <div className="settings">
        <h1 className="settings">Settings</h1>

        <div className="settingsForm">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="inputBoxes" type="email" placeholder="add user's current email here as a default" value={email} onChange={handleEmailChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="inputBoxes" type="password" placeholder="" value={password} onChange={handlePasswordChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="inputBoxes" type="text" placeholder="name" value={name} onChange={handleNameChange} />
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
                    </Form.Row> */}
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control className="inputBoxes" type="text" placeholder="currentUserAddress" value={address} onChange={handleAddressChange} />
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
        </div>










      </div>
  );
}

export default Settings;