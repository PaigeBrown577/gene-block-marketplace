import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "../../styles/Personal.css";

import Explore from "./Explore";
import Messages from "./Messages";
import Profile from "./Profile";
import MakePost from "./MakePost";
import PostHistory from "./PostHistory";
import api from "../../api"

import SetUserID from "../homePage/SetUserID";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Personal({ user, setUser}) {



  // console.log("render");
  // personal only renders once
  // when you switch between pages, it doesn't re-render

  const [posts, setPosts] = useState([]);


  // console.log(user);


  return (
    <div className="personal">
        <Sidebar user={user} setUser={setUser} />

        <Switch>
          <Route path="/personal/home">
            <Feed posts={posts} setPosts={setPosts} user={user}/>
            {/* <Widgets user={user}/> */}
          </Route>
          <Route path="/personal/explore">
            <Explore posts={posts} setPosts={setPosts} />
          </Route>
          <Route path="/personal/messages">
            <Messages user={user}/>
          </Route>
          <Route path="/personal/postHistory">
            <PostHistory posts={posts} setPosts={setPosts} user={user}/>
          </Route>
          <Route path="/personal/makePost">
            <MakePost posts={posts} setPosts={setPosts} user={user} setUser={setUser}/>
          </Route>
          <Route path="/personal/profile">
            <Profile user={user} setUser={setUser} posts={posts} setPosts={setPosts} />
          </Route>
          <Route path="/personal/setuserid">
            <SetUserID user={user} setUser={setUser} />
          </Route>
          {/* <Route path = "/personal/:username">"hello world"</Route> */}
        </Switch>
    </div>
  );
}

export default Personal;
