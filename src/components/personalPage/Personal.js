import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./Personal.css";

import Explore from "./Explore";
import Messages from "./Messages";
import Settings from "./Settings";
import MakePost from "./MakePost";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Personal() {
  return (
    <div className="personal">

        <Sidebar />

        <Switch>
          <Route exact path="/personal">
            <Feed />
            <Widgets />
          </Route>
          <Route path="/personal/explore">
            <Explore />
          </Route>
          <Route path="/personal/messages">
            <Messages />
          </Route>
          <Route path="/personal/makePost">
            <MakePost />
          </Route>
          <Route path="/personal/settings">
            <Settings />
          </Route>
        </Switch>
    </div>
  );
}

export default Personal;
