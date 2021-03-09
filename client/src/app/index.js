import logo from '../logo.svg';
import background from '../ucla-img.jpg';
import '../styles/App.css';

import {PostsList, UsersList} from '../pages';

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
        <h1 class="WelcomeText">Welcome to Block Marketplace!</h1>
        <p color="black">Buy, Sell, and Discover textbooks, furniture, and more from the UCLA community!</p>
        <Button variant="primary" size="lg" type="submit"><a href="/login" style={{color:"white"}}>Login </a></Button>
        
        <p></p>
        <Button variant="primary" size="lg" type="submit"><a href="/signup" style={{color:"white"}}>Signup </a></Button>
    </div>
    );
}

export default App;
