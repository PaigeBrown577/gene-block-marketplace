import logo from '../logo.svg';
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

import SetUserID from "../components/homePage/SetUserID";

import SignedInNavbar from "../components/personalPage/SignedInNavbar";

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
    <div>
        <h2>Home</h2>

        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
    </div>
    );
}

export default App;
