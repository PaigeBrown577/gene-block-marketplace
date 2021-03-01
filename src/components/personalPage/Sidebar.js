import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SettingsIcon from "@material-ui/icons/Settings";
import { Button } from "@material-ui/core";

import Icon from '@material-ui/core/Icon';

function Sidebar() {
  return (
    // <div className="sidebar">
    // <SidebarOption active IconName="home" text="Home" />
    // <SidebarOption IconName="search" text="Explore" />
    // <SidebarOption IconName="forum" text="Messages" />
    // {/* <SidebarOption Icon={PermIdentityIcon} text="Profile" /> */}
    // <SidebarOption IconName="settings" text="Settings" />

    // </div>



    <div className="sidebar">
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      {/* <SidebarOption Icon={PermIdentityIcon} text="Profile" /> */}
      <SidebarOption Icon={SettingsIcon} text="Settings" />

    </div>
  );
}

export default Sidebar;
