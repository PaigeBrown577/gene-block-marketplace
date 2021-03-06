import logo from '../logo.svg';
import '../styles/App.css';

import {PostsList, UsersList} from '../pages';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Login, Signup, NavigationBar, Personal} from "../components";

function App() {
  return (
    <Router>

    <div className="App">
      <NavigationBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <header className="App-header">
              <Login />
            </header>
          </Route>
          <Route path="/signup">
            <header className="App-header">
              <Signup />
            </header>
          </Route>
          <Route path="/posts/list" exact component={PostsList} />
          <Route path="/users/list" exact component={UsersList} />
          <Route path="/" exact>
            <header className="App-header">
              <Home />
            </header>
          </Route>
        </Switch>
    </div>

      <Switch>
        <Route path="/personal">
          <Personal />
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
