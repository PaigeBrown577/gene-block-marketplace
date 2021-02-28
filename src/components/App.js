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
import Personal from "./Personal";

function App() {
  return (
    <div className="App">
    <Router>

      <NavigationBar />



      <header className="App-header">

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>          
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>


      </header>
      </Router>
    </div>
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
