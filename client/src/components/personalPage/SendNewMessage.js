import React, {useState, useEffect} from "react";
import "../../styles/SendNewMessage.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import api from "../../api"
import swal from 'sweetalert';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function SendNewMessage({user, replyTo, buttonMessage}) {
    const [toEmail, setToEmail] = useState(replyTo || "");
    const [fromEmail, setFromEmail] = useState(user ? user.email : "");
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");
    // console.log("what");

    useEffect(() => {
      // console.log(user);
      if(user)
        setFromEmail(user.email);
    }, []);

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
        event.preventDefault();
        const payload = {toEmail, fromEmail, subject, text};
        api.insertMessage(payload).then(res => {
          // console.log("message sent");
          swal("Message sent!", "" ,"success");
          // window.alert("here");
        })
    
        history.push(`/personal/home/${user._id}`);
      }

      function validateForm() {
        return toEmail.length > 0 && subject.length > 0 && text.length > 0;
      }


    return (
        <Popup trigger={<Button variant="primary" type="button">{buttonMessage || "Send new message"}</Button>} modal>
          {close => ( 
          <div>
              <div className="header"> <b>New message</b> </div>

              <p></p>

              <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="recipient">
                      <Form.Label>To:</Form.Label>
                      <Form.Control type="email" placeholder="example@example.com" value={toEmail} onChange={handleChangeToEmail} required/>
                      <Form.Text className="text-muted">
                          Please enter their email.
                      </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="messageTitle">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" onChange={handleChangeSubject} required/>
                  </Form.Group>
                  <Form.Group controlId="messageContent">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={7} onChange={handleChangeText} required />
                  </Form.Group>
                  <Button variant="primary" type="submit" disabled={!validateForm()}>Send message</Button>
                  <div class="divider"/>
                  <Button variant="primary" type="button" onClick={() => {close()}}>Cancel</Button>
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