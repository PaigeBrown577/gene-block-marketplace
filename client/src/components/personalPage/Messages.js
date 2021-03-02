import React from "react";
import "../../styles/Messages.css";

import SendNewMessage from "./SendNewMessage";


import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Messages() {
  return (
    <div className="messages">
      <h1>Messages</h1>

      <SendNewMessage />

      <br/>
      <hr/>
      <p>message1</p>


      <br/>
      <hr/>
      <p>message2</p>

      <br/>
      <hr/>
      <p>message3</p>

      <br/>

    </div>
  );
}

export default Messages;