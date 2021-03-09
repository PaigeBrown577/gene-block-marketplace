import React, {useState, useEffect} from "react";
import "../../styles/Messages.css";
import api from "../../api"

import SendNewMessage from "./SendNewMessage";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Messages({userID, setUserID}) {
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
    <div className="Messages">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>To:</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={toEmail}
            onChange={handleChangeToEmail}
          />
          <Form.Label>Subject:</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={subject}
            onChange={handleChangeSubject}
          />
          <Form.Label>Body:</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={text}
            onChange={handleChangeText}
          />
        </Form.Group>
        <Button block size="lg" variant="primary" type="submit" disabled={!validateForm()}>Send Message</Button>
      </Form>

      <p></p>
      <SendNewMessage />
    </div>
  );
}

export default Messages;