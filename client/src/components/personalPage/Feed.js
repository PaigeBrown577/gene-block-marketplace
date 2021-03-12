import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../../styles/Feed.css";
import FlipMove from "react-flip-move";
import SearchIcon from "@material-ui/icons/Search";
import api, { getAllPosts } from "../../api"


function Feed({ posts, setPosts, user }) {
  const [searchbarValue, setSearchbarValue] = useState("");


  const getPosts = async () => {
    await api.getAllPosts().then(posts => {
      // console.log(post.data.data)
      // if(post.data.data !== posts)

      let postArray = posts.data.data;

      // console.log("is this even called?");
        for(let i = 0; i < postArray.length; i++){
          // console.log(postArray[i].userID, user._id);

          if(postArray[i].userID === user._id){
            postArray[i].displayDeleteButton = true;

          }
        }

        setPosts(postArray);

        <button onClick={handleClearClick}>clear</button>
    })
  }

  useEffect(getPosts, []);

  const handleSearchbarChange = (event) => {
    setSearchbarValue(event.target.value);
  }

  const deletePost = (event) => {
    setSearchbarValue(event.target.value);
  }

  const handleClearClick = () => {
    setSearchbarValue("");
  }

  const shouldDisplayClearButton = searchbarValue.length > 0;

  let filteredPosts = posts.filter((post) => {
    let search = searchbarValue.toLowerCase();

    let lowercaseName = post.displayName ? post.displayName.toLowerCase() : "";
    let lowercaseTag = post.tag.toLowerCase();
    let lowercaseTitle = post.title.toLowerCase();
    let lowercaseText = (post.text) ? post.text.toLowerCase() : "";

    return lowercaseName.includes(search) || lowercaseTag.includes(search)
     || lowercaseTitle.includes(search) || lowercaseText.includes(search);

    // filters by displayName, tag, title, text
  })

  return (
    <div className="feed">
      {/* <div className="feed__header">
        <h2>Home</h2>
      </div> */}


      {/* <div className="searchBar">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search" type="text" value={searchbarValue} onChange={handleSearchbarChange} />
          {shouldDisplayClearButton && <button onClick={handleClearClick}>clear</button>} 
      </div>

      <hr/> */}

      <h1 className = "main_feed" style={{paddingLeft:20, paddingTop:20}}>Main Feed</h1>
      <hr/>

      <FlipMove>
        {filteredPosts.map((post, index) => (
          <Post
            key={index}
            displayName={post.displayName}
            tag={post.tag}
            date={post.date}
            title={post.title}
            price={post.price}
            text={post.text}
            avatar={post.avatar}
            meeting_location = {post.meeting_location}
            displayDeleteButton = {post.displayDeleteButton}
            email = {post.email}
            user = {user}
            _id = {post._id}
          />
        ))}


      </FlipMove>
    </div>
  );
}

export default Feed;
