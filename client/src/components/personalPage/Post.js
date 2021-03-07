import React, { forwardRef } from "react";
import "../../styles/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import StarOutlineIcon from '@material-ui/icons/StarOutline';

// const Post = forwardRef(
//   ({ displayName, username, verified, text, image, avatar }, ref) => {
//     return (
//       <div className="post" ref={ref}>
//         <div className="post__avatar">
//           <Avatar src={avatar} />
//         </div>
//         <div className="post__body">
//           <div className="post__header">
//             <div className="post__headerText">
//               <h3>
//                 {displayName}{" "}
//                 <span className="post__headerSpecial">
//                   {verified && <VerifiedUserIcon className="post__badge" />} @
//                   {username}
//                 </span>
//               </h3>
//             </div>
//             <div className="post__headerDescription">
//               <p>{text}</p>
//             </div>
//           </div>
//           <img src={image} alt="" />
//           <div className="post__footer">
//             <ChatBubbleOutlineIcon fontSize="small" />
//             <StarOutlineIcon fontSize="small" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// );


const Post = forwardRef(
  ({ displayName, username, text, image, avatar, date, tag, title, price, meeting_location }, ref) => {
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
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <StarOutlineIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);






export default Post;
