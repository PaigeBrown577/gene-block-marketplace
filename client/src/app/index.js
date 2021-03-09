import logo from '../logo.svg';
import background from '../ucla-img.jpg';
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

//import background from "src/ucla-react-image.jpeg";

function App() {

  // const [userID, setUserID] = useState("");

  const [user, setUser] = useState()
  const [userID, setUserID] = useState(sessionStorage.getItem("sessionUserID") || "");

  useEffect(() => {
    sessionStorage.setItem("sessionUserID", userID);

    const getUser = async () => {
      if(userID !== ""){
        await api.getUserById(userID).then(user => {
          setUser(user.data.data)
        })
      }
    }

    getUser();

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
          <SignedInNavbar user={user} setUser={setUser  } />
          <Personal user={user} setUser={setUser}/>
        </Route>
      </Switch>

      </Router>
  );
}

function Home() {
  return (
    <div className="Background" >
        <h1 class="WelcomeText">Welcome to Block Marketplace!</h1>
        <p class="MessageText">Buy, Sell, and Discover textbooks, furniture, and more from the UCLA community!</p>
        <Button variant="primary" size="lg" type="submit"><a href="/login" style={{color:"white"}}>Login </a></Button>
        
        <p></p>
        <Button variant="primary" size="lg" type="submit"><a href="/signup" style={{color:"white"}}>Signup </a></Button>
    </div>
    );
}

export default App;
