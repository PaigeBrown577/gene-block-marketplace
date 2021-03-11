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

function Messages({userID, setUserID}) {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const getUser = async () => {
        await api.getUserById(userID).then(user => {
          setUserEmail(user.data.data.email)
        })
    }
    getUser();
  }, [])

  let history = useHistory();

  return (
    <div className="messages">
      <h1 className="messages">Messages</h1>
      <div className="sendNewMessage"> 
      <SendNewMessage userID={userID} setUserID={setUserID}/>
      </div>
      <p></p>
      <MessagesTable userID={userID} setUserID={setUserID} className="table"/>
    </div>
  );
}

export default Messages;