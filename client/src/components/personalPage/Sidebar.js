import React from "react";
import logo from '../../bruin_logo.jpg';
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


// function SidebarMessage({user, setUser}){
//   return(
//   <div className="sidebarmessage">
//       {}

//     <SendNewMessage user={user} text_/>
//   </div>);
// }

function Sidebar({ user, setUser }) {
  return (
    // <div className="sidebar">
    // <SidebarOption active IconName="home" text="Home" />
    // <SidebarOption IconName="search" text="Explore" />
    // <SidebarOption IconName="forum" text="Messages" />
    // {/* <SidebarOption Icon={PermIdentityIcon} text="Profile" /> */}
    // <SidebarOption IconName="settings" text="Settings" />

    // </div>


    <div className="sidebar">
      {/* <SidebarOption Icon={PermIdentityIcon} text="Profile" /> */}

      {/* <SendNewMessage user={user} text_/> */}

      {/* <br></br> */}

      <Link to={`/personal/home/${user._id}`}>
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Link>

      <Link to={`/personal/explore/${user._id}`}>
        <SidebarOption Icon={SearchIcon} text="Explore" />
      </Link>

      <Link to={`/personal/messages/${user._id}`}>
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      </Link>

      <Link to={`/personal/postHistory/${user._id}`}>
        <SidebarOption Icon={SettingsIcon} text="Your Posts" />
      </Link>

      <Link to={`/personal/makePost/${user._id}`}>
        <SidebarOption Icon={SettingsIcon} text="Create New Listing" />
      </Link>

      <Link to={`/personal/profile/${user._id}`}>
        <SidebarOption Icon={SettingsIcon} text="Profile" />
      </Link>

      <br></br>

      <SendNewMessage user={user} text_/>

      <br></br>
      {/* console.log(logo) */}
      <img className = "img_bruin" src={logo} alt="Logo" />
      {/* <img src={ require('../../bruin_logo.jpg') } /> */}



    </div>
  );
}

export default Sidebar;
