import logo from '../logo.svg';
import '../styles/App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

import Login from "./Login";
import Signup from "./Signup";
import NavigationBar from "./NavigationBar";
import Personal from "./personalPage/Personal";

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
