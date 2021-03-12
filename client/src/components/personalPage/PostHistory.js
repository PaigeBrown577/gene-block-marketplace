import React, {useState, useEffect} from "react";
import api from "../../api"

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import PostHistoryTable from "./PostHistoryTable";
import "../../styles/PostHistory.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PostHistory({user, posts, setPosts}) {

  return (
    <div>
        <h1 className="postHistory">Your Previous Posts</h1>

        <p></p>
        <div className="aroundTable">
        <PostHistoryTable posts={posts} setPosts={setPosts} user={user} className="table"/>
        </div>
    </div>
  );
}

export default PostHistory;