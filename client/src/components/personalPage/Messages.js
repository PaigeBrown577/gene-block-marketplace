import React, {useState, useEffect} from "react";
import "../../styles/Messages.css";
import api from "../../api"

import SendNewMessage from "./SendNewMessage";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import MessagesTable from "./MessagesTable";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// look in sendNewMessage for fields
// hard code some stuff for now

function Messages({user}) {

  let history = useHistory();

  return (
    <div>
      <h1 className="messages">Messages</h1>
      <div className="sendNewMessage"> 
      <SendNewMessage user={user}/>
      </div>
      <p></p>
      <MessagesTable user={user} className="table"/>
    </div>
  );
}

export default Messages;