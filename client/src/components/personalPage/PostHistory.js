import React, {useState, useEffect} from "react";
import api from "../../api"

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import PostHistoryTable from "./PostHistoryTable";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PostHistory({userID, setUserID, posts, setPosts}) {

  return (
    <div className="PostHistory">
        <h1>Your Previous Posts</h1>

        <p></p>

        <PostHistoryTable posts={posts} setPosts={setPosts} userID={userID} setUserID={setUserID} />

    </div>
  );
}

export default PostHistory;