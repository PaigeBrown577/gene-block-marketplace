import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../../styles/Feed.css";
import FlipMove from "react-flip-move";
import SearchIcon from "@material-ui/icons/Search";
import api from "../../api"


function Feed({ posts, setPosts }) {
  const [searchbarValue, setSearchbarValue] = useState("");


  const getPosts = async () => {
    await api.getAllPosts().then(post => {
      console.log(post.data.data)
      // if(post.data.data !== posts)
        setPosts(post.data.data)
    })
  }

  useEffect(getPosts, []);

  const handleSearchbarChange = (event) => {
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


      <div className="searchBar">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search" type="text" value={searchbarValue} onChange={handleSearchbarChange} />
          {shouldDisplayClearButton && <button onClick={handleClearClick}>clear</button>} 
      </div>

      <hr/>

      <FlipMove>
        {filteredPosts.map((post, index) => (
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            tag={post.tag}
            date={post.date}
            title={post.title}
            price={post.price}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            meeting_location = {post.meeting_location}
          />
        ))}


      </FlipMove>
    </div>
  );
}

export default Feed;
