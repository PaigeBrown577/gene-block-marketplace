import logo from '../logo.svg';
import background from '../ucla-img.jpg';
// import ReactDOM from 'react-dom';
import '../styles/App.css';
import {PostsList, UsersList, MessagesList} from '../pages';

import React, { useState } from "react";
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

// import { SocialIcon } from 'react-social-icons';
// ReactDOM.render(<SocialIcon url="http://instagram.com/" />, document.body);

//import background from "src/ucla-react-image.jpeg";

function App() {

  const [userID, setUserID] = useState("");

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
       
          {/* <div class = "button"> */}
          <a href="http://facebook.com" target="_blank" className="button">
            {/* <div className="icon">
              <i className= "fab fa-facebook-f"></i></div> */}
             <span>Facebook</span>
             </a>
                {/* </div>  */}
         
          {/* <div className="button"> */}
          <a href="https://www.instagram.com/block_marketplace/" target="_blank" className="button">
            {/* <div className="icon">
              <i className="fab fa-instagram"></i></div> */}
              <span>Instagram</span>
              </a>
                {/* </div> */}
          <a href="http://tiktok.com" target="_blank" className="button" >
          {/* <div className="button"> */}
            {/* <div className="icon">
              <i className="fab fa-instagram"></i></div> */}
              <span>TikTok</span>
                {/* </div> */}
          </a>
          </div>
        </div>
    );
}

export default App;
