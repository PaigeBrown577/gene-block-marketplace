import React from "react";
import "../../styles/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

import SendNewMessage from "./SendNewMessage";

function Widgets({ userID, setUserID }) {
  return (
    <div className="widgets">

      {/* <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search" type="text" />
      </div> */}

      <div className="widgets__input widgets_send_message">
        <SendNewMessage userID={userID} setUserID={setUserID} />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Unread Messages</h2>
        <br/>
        <hr/>
        <p>hello</p>


        <br/>
        <hr/>
        <p>looking for house</p>

        <br/>
        <hr/>
        <p>anyone with 19p got spare swipes</p>

        <br/>


      </div>
    </div>
  );
}

export default Widgets;
