import React, {useState} from "react";
import "../../styles/Messages.css";

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

function Messages() {
  const [toEmail, setToEmail] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

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

  function handleSubmit(event){

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
            value={toEmail}
            onChange={handleChangeToEmail}
          />
        </Form.Group>
        <Button block size="lg" variant="primary" type="submit" disabled={!validateForm()}>Login</Button>
      </Form>
    </div>
  );
}

export default Messages;