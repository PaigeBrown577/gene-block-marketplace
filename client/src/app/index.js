import background from '../ucla-img.jpg';
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
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

  const [userID, setUserID] = useState(sessionStorage.getItem("sessionUserID") || "");

  useEffect(() => {
    sessionStorage.setItem("sessionUserID", userID);
  }, [userID]);


  return (
    <Router>

    <div className="App">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <NavigationBar />
            <header className="App-header">
              <Login userID={userID} setUserID={setUserID} />
            </header>
          </Route>
          <Route path="/signup">
            <NavigationBar />
            <header className="App-header">
              <Signup userID={userID} setUserID={setUserID} />
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
          <SignedInNavbar userID={userID} setUserID={setUserID} />
          <Personal userID={userID} setUserID={setUserID} />
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
