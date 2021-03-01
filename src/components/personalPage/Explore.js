import React from "react";
import "./Explore.css";

import SearchIcon from "@material-ui/icons/Search";

function Explore() {
  return (
      <div className="explore">
        <h1>Explore</h1>

        <div className="searchBar">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search" type="text" />
        </div>

      </div>
  );
}

export default Explore;
