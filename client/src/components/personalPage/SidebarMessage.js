import React from "react";
import logo from '../../bruin_logo.jpg';
import "../../styles/SidebarMessage.css";
import "../../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SettingsIcon from "@material-ui/icons/Settings";
import { Button } from "@material-ui/core";

import Icon from '@material-ui/core/Icon';

import SendNewMessage from "./SendNewMessage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function SidebarMessage({user, setUser}){
  return(
  <div className="sidebarmessage">
      {}

    <SendNewMessage user={user} text_/>
  </div>);
}


export default SidebarMessage;
