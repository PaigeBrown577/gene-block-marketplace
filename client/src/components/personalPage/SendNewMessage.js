import React, {useState, useEffect} from "react";
import "../../styles/SendNewMessage.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from "../../api"

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function SendNewMessage({userID, setUserID}) {
    const [toEmail, setToEmail] = useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        const getUser = async () => {
            await api.getUserById(userID).then(user => {
              setFromEmail(user.data.data.email)
            })
        }
        getUser();
    }, [])
    
      let history = useHistory();
    
      function validateForm() {
          return true;
      }
    
      const handleChangeToEmail = (event) => {
        setToEmail(event.target.value);
      }
    
      const handleChangeFromEmail = (event) => {
        setFromEmail(event.target.value);
      }
    
      const handleChangeSubject = (event) =>{
        setSubject(event.target.value);
      }
    
      const handleChangeText = (event) =>{
        setText(event.target.value);
      }
    
      function handleSubmit(event){
        const payload = {toEmail, fromEmail, subject, text};
    
        api.insertMessage(payload).then(res => {
          window.alert(`Message inserted successfully`);
        })
    
        history.push(`/personal/home/${userID}`);
      }


    return (
        <Popup trigger={<Button variant="primary">Send new message</Button>} modal>
          {close => ( 
          <div>
              <div className="header"> <b>New message</b> </div>

              <p></p>

              <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="recipient">
                      <Form.Label>To:</Form.Label>
                      <Form.Control type="text" placeholder="example@example.com" value={toEmail} onChange={handleChangeToEmail}/>
                      <Form.Text className="text-muted">
                          Please enter their email.
                      </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="messageTitle">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" onChange={handleChangeSubject}/>
                  </Form.Group>
                  <Form.Group controlId="messageContent">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={7} onChange={handleChangeText} />
                  </Form.Group>
                  <Button variant="primary" type="submit">Send message</Button>
                  <div class="divider"/>
                  <Button variant="primary" onClick={() => {close()}}>Cancel</Button>
                  {/* <Link to="/personal">
                      <Button variant="primary" type="button">Go to home</Button>
                  </Link> */}
              </Form>
          </div>   
          )}
      </Popup>
    );
}

export default SendNewMessage;