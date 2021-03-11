import React, { forwardRef } from "react";
import "../../styles/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import StarOutlineIcon from '@material-ui/icons/StarOutline';

import SendNewMessage from "./SendNewMessage";

const Post = forwardRef(
  ({ displayName, username, text, image, avatar, date, tag, title, price, meeting_location, userID, setUserID }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h4 className= "username">{displayName}</h4>
              <h2 className = "title">{title}</h2>
              <h3 className="price">Price: ${price}</h3>
              <img src={image} alt="" />
              
            </div>
            <div className="post__headerDescription">
              <p className = "description">Description:{text}</p>
              <p>Meeting Location: {meeting_location} </p>
            </div>
          </div>
          <div className="post__footer">
            {/* <ChatBubbleOutlineIcon fontSize="small" /> */}
            <SendNewMessage userID={userID} setUserID={setUserID} buttonMessage="Message now" replyTo={displayName} />

            {/* <StarOutlineIcon fontSize="small" /> */}
            <h3>
                <mark>#{tag}</mark>
                {" "}
                <span className="post__headerSpecial">
                  Posted by {displayName} on {date}
                </span>
              </h3>
          </div>
        </div>
      </div>
    );
  }
);






export default Post;
