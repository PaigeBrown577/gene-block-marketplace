import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Your messages</h2>
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
