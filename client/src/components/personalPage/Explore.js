import "../../styles/Explore.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../../styles/Feed.css";
import FlipMove from "react-flip-move";
import SearchIcon from "@material-ui/icons/Search";
import api from "../../api"

function Explore({posts, setPosts}) {
    const [searchbarValue, setSearchbarValue] = useState("");
    const [filterValue, setFilterValue] = useState("All");
    const [tagFilteredPosts, setTagFilteredPosts] = useState(posts);


    const getPosts = async () => {
      await api.getAllPosts().then(post => {
        console.log(post.data.data)
        // if(post.data.data !== posts)
          setPosts(post.data.data)
      })
    }
  
    useEffect(getPosts, []);

    const handleFilterSubmit = (event) => {
        event.preventDefault();
        
        console.log(filterValue);

        if (filterValue === "All")
        {
            setTagFilteredPosts(posts);
            return;
            // set it to all the posts
        }

        let temp = posts.filter((post) => {
            return post.tag === filterValue;
        })

        setTagFilteredPosts(temp);
        // filter out by tag

    }
  
    const handleSearchbarChange = (event) => {
      setSearchbarValue(event.target.value);
    }
  
    const handleClearClick = () => {
      setSearchbarValue("");
    }

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    }

    
  
    const shouldDisplayClearButton = searchbarValue.length > 0;


    let filteredPosts = tagFilteredPosts.filter((post) => {
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
      <div className="explore">
        <h1>Explore</h1>
        
        <p></p>

        <div className="exploreForm">
            <Form onSubmit={handleFilterSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Filter by:</Form.Label>
                    <Form.Row className="align-items-center">
                        <Col xs="auto" className="my-1">
                        <Form.Control as="select" value={filterValue} onChange={handleFilterChange}>
                        <option>All</option>
                        <option>Books</option>
                        <option>Furniture</option>
                        <option>Swipes</option>
                        </Form.Control>
                        </Col>
                        <Col sm={3} className="my-1"> 
                            <Button variant="primary" type="submit">Filter</Button>
                        </Col>
                    </Form.Row>
                </Form.Group>
            </Form>
        </div>

        <div >

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


      </div>
  );
}

export default Explore;
