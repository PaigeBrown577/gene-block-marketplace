import React, {useState, useEffect} from "react";
import "../../styles/Messages.css";
import api from "../../api"

import SendNewMessage from "./SendNewMessage";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ad from "../../ad.jpg"

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
      <h1 className="messages" style={{paddingLeft:20, paddingTop:20}}>Messages</h1>
      <div className="sendNewMessage" style={{paddingLeft:20}}> 
      <SendNewMessage user={user}/>
      </div>
      <p></p>
      <div className="container">
        <br></br>
      <MessagesTable user={user} className="table"/>
      <a href= "https://www.mcdonalds.com/us/en-us.html" target = "blank"><img src={ad} alt="image" className="image" style={{paddingLeft:100, paddingTop:10}}/></a>
      </div>
    </div>
  );
}

export default Messages;