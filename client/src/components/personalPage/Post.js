import React, { forwardRef } from "react";
import "../../styles/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import Button from "react-bootstrap/Button";
import api from "../../api";

import SendNewMessage from "./SendNewMessage";


const Post = forwardRef(
  ({ displayName, text, avatar, date, tag, title, price, meeting_location, displayDeleteButton, deletePost, user, email, _id}, ref) => {

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                <mark>#{tag}</mark>
                {" "}
                <span className="post__headerSpecial">
                  Posted by {displayName} on {date}
                </span>
              </h3>
              <h1>{title}</h1>
              <h3>${price}</h3>
              <br/>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
              <p>Meeting Location: {meeting_location} </p>
            </div>
          </div>
          <img src="http://localhost:3000/b537dadf-c2e4-4538-9f74-7f8b095ee022" alt="" />
          <div className="post__footer">
            {/* {displayDeleteButton && <button onClick={deletePost}>Delete</button>} */}
            {/* <ChatBubbleOutlineIcon fontSize="small" /> */}
            <SendNewMessage user={user} buttonMessage="Message now" replyTo={email} />

            {/* <StarOutlineIcon fontSize="small" /> */}
          </div>
        </div>
      </div>
    );
  }
);






export default Post;
