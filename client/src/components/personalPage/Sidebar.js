import React from "react";
import "../../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SettingsIcon from "@material-ui/icons/Settings";
import { Button } from "@material-ui/core";

import Icon from '@material-ui/core/Icon';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Sidebar({ userID, setUserID }) {
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

      <Link to={`/personal/home/${userID}`}>
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Link>

      <Link to={`/personal/explore/${userID}`}>
        <SidebarOption Icon={SearchIcon} text="Explore" />
      </Link>

      <Link to={`/personal/messages/${userID}`}>
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      </Link>

      <Link to={`/personal/postHistory/${userID}`}>
        <SidebarOption Icon={SettingsIcon} text="Your Posts" />
      </Link>

      <Link to={`/personal/makePost/${userID}`}>
        <SidebarOption Icon={SettingsIcon} text="Create New Listing" />
      </Link>

      <Link to={`/personal/profile/${userID}`}>
        <SidebarOption Icon={SettingsIcon} text="Profile" />
      </Link>

    </div>
  );
}

export default Sidebar;
