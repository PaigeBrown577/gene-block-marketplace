import React from "react";
import "../styles/layout.css";
import SignUp from "./signup";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login";
import Nav from "./nav";
import Profile from "./profile";


const Main = () => {
    return (
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/nav" component={Nav}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
        </Switch>
    )
}

export default Main;