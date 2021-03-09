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
    <div className="Messages">


      <p></p>
      <SendNewMessage userID={userID} setUserID={setUserID}/>
    </div>
  );
}

export default Messages;