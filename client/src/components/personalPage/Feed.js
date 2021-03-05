import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../../styles/Feed.css";
import FlipMove from "react-flip-move";
import SearchIcon from "@material-ui/icons/Search";


let posts = [{displayName: "John", username: "johnboi", tag: "books", date: "3/4/2021", title: "my body", price:"50", text: "Hi there ;)", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/04/John_Legend_2019_by_Glenn_Francis.jpg"},
{displayName: "Jean", username: "French", tag: "swipes", date: "3/4/2021", title:"Baguette hon hon", price:"1", text: "Bonjour", avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"},
{displayName: "Lil John", username: "KevinWest", tag:"books", date: "3/4/2021", title: "cs97", price: "0", text: "Lil John in the house", avatar: "http://t1.gstatic.com/images?q=tbn:ANd9GcTeNVuH7TfxNLZ9n8y9nm-zlyQJAcrfk3yslLpMUsOMxqqOU1OgaiiQajvJVGVr"},
{displayName: "Big John", username: "Rohit", tag: "swipes", date: "3/4/2021", title: "job vacancy", price: "10", text: "Ghosh Enterprises hiring now", avatar: "https://www.unilad.co.uk/wp-content/uploads/2018/08/big-john1.jpg", image: "https://s3-media0.fl.yelpcdn.com/bphoto/9Lis6zeVaaSm9RcmR2rT9A/348s.jpg"},
];

function Feed() {
  const [searchbarValue, setSearchbarValue] = useState("");

  const handleSearchbarChange = (event) => {
    setSearchbarValue(event.target.value);
  }

  const handleClearClick = () => {
    setSearchbarValue("");
  }

  const shouldDisplayClearButton = searchbarValue.length > 0;

  // console.log(searchbarValue);

  let filteredPosts = posts.filter((post) => {
    let lowercaseName = post.displayName.toLowerCase();
    let lowercaseText = post.text.toLowerCase();
    let search = searchbarValue.toLowerCase();

    return lowercaseName.includes(search) || lowercaseText.includes(search);

    // return post.displayName.includes(searchbarValue) || post.text.includes(searchbarValue);
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
        {filteredPosts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            tag={post.tag}
            date={post.date}
            title={post.title}
            price={post.price}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}


      </FlipMove>
    </div>
  );
}

export default Feed;
