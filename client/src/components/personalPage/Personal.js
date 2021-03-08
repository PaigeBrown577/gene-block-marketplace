import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "../../styles/Personal.css";

import Explore from "./Explore";
import Messages from "./Messages";
import Profile from "./Profile";
import MakePost from "./MakePost";
import api from "../../api"

import SetUserID from "../homePage/SetUserID";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Personal({ userID, setUserID }) {

  console.log("render");
  // personal only renders once
  // when you switch between pages, it doesn't re-render

  const [posts, setPosts] = useState([]
  //   [{displayName: "John", username: "johnboi", tag: "books", date: "3/4/2021", title: "my body", price:"50", text: ";)", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/04/John_Legend_2019_by_Glenn_Francis.jpg"},
  // {displayName: "Jean", username: "French", tag: "swipes", date: "3/4/2021", title:"Baguette hon hon", price:"1", text: "Bonjour", avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"},
  // {displayName: "Lil John", username: "KevinWest", tag:"books", date: "3/4/2021", title: "cs97", price: "0", text: "Lil John in the house", avatar: "http://t1.gstatic.com/images?q=tbn:ANd9GcTeNVuH7TfxNLZ9n8y9nm-zlyQJAcrfk3yslLpMUsOMxqqOU1OgaiiQajvJVGVr"},
  // {displayName: "Big John", username: "Rohit", tag: "swipes", date: "3/4/2021", title: "job vacancy", price: "10", text: "Ghosh Enterprises hiring now", avatar: "https://www.unilad.co.uk/wp-content/uploads/2018/08/big-john1.jpg", image: "https://s3-media0.fl.yelpcdn.com/bphoto/9Lis6zeVaaSm9RcmR2rT9A/348s.jpg"},
  );


  console.log("hello colbert");


  return (
    <div className="personal">
        <Sidebar userID={userID} setUserID={setUserID} />

        <Switch>
          <Route path="/personal/home">
            <Feed posts={posts} setPosts={setPosts}/>
            <Widgets />
          </Route>
          <Route path="/personal/explore">
            <Explore />
          </Route>
          <Route path="/personal/messages">
            <Messages />
          </Route>
          <Route path="/personal/makePost">
            <MakePost posts={posts} setPosts={setPosts} userID={userID} setUserID={setUserID}/>
          </Route>
          <Route path="/personal/profile">
            <Profile userID={userID} setUserID={setUserID} />
          </Route>
          <Route path="/personal/setuserid">
            <SetUserID userID={userID} setUserID={setUserID} />
          </Route>
          {/* <Route path = "/personal/:username">"hello world"</Route> */}
        </Switch>
    </div>
  );
}

export default Personal;
