import React from "react";
import "../../styles/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

import SendNewMessage from "./SendNewMessage";

function Widgets({ user }) {
  return (
    <div className="widgets">

      {/* <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search" type="text" />
      </div> */}

      <div className="widgets__input widgets_send_message">
        <SendNewMessage user={user}/>
      </div>

      <div className="widgets__widgetContainer">



      </div>
    </div>
  );
}

export default Widgets;
