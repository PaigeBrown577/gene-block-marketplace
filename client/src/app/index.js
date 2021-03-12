import background from '../ucla-img.jpg';
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

import api from '../api';

import '../styles/App.css';
import {PostsList, UsersList, MessagesList} from '../pages';

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Login, Signup, NavigationBar, Personal } from "../components";
import Button from "react-bootstrap/Button";

import SetUserID from "../components/homePage/SetUserID";

import SignedInNavbar from "../components/personalPage/SignedInNavbar";


function App() {

  // const [userID, setUserID] = useState("");

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("sessionUser")) || "");
  const [userID, setUserID] = useState(sessionStorage.getItem("sessionUserID") || "");

  useEffect(() => {
    sessionStorage.setItem("sessionUserID", userID);

    const getUser = async () => {
      if(userID !== ""){
          await api.getUserById(userID).then(user => {
            setUser(user.data.data);
          })
        }
      }

    getUser();
    sessionStorage.setItem("sessionUser", JSON.stringify(user))
  }, [user, userID]);


  return (
    <Router>

    <div className="App">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <NavigationBar />
            <header className="App-header">
              <Login user={user} setUser={setUser} />
            </header>
          </Route>
          <Route path="/signup">
            <NavigationBar />
            <header className="App-header">
              <Signup user={user} setUser={setUser} />
            </header>
          </Route>
          <Route path="/posts/list" exact component={PostsList} />
          <Route path="/users/list" exact component={UsersList} />
          <Route path="/messages/list" exact component={MessagesList} />
          <Route path="/" exact>
            <NavigationBar />
            <header className="App-header">
              <Home />
            </header>
          </Route>
        </Switch>
    </div>

      <Switch>
        <Route path="/personal">
          <SignedInNavbar user={user} setUser={setUser} />
          <Personal user={user} setUser={setUser}/>
        </Route>
      </Switch>

      </Router>
  );
}

function Home() {
  return (
    <div className="Background" >
        <h1 className="WelcomeText">Welcome to Block Marketplace!</h1>
        <p className="MessageText">Buy, Sell, and Discover textbooks, furniture, and more from the UCLA community!</p>
        <div className="buttons">
          <Button variant="primary" size="lg" type="submit"><a href="/login" style={{color:"white"}}>Login </a></Button>
        </div>
        <Button variant="primary" size="lg" type="submit"><a href="/signup" style={{color:"white"}}>Signup </a></Button>
        <div className = "wrapper">
        <div className="button">
               <span className="span_icon"><SocialIcon url="http://facebook.com/block_marketplace" target = "blank" style={{ height: 60, width: 60 }} /></span>
                </div>
          <div className="button">
               <span className="span_icon"><SocialIcon url="http://instagram.com/block_marketplace" target = "blank" style={{ height: 60, width: 60 }}/></span>
                </div>
                <div className="button">
               <span className="span_icon"><SocialIcon url="https://github.com/PaigeBrown577/gene-block-marketplace" target = "blank" style={{ height: 60, width: 60 }}/></span>
                </div>
          </div>

          </div>
    );
}

export default App;
