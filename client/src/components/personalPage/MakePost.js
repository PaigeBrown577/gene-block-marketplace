import React, { Component , useState} from "react";
import "../../styles/MakePost.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useHistory } from "react-router-dom";

import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

function MakePost({ posts, setPosts }) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [dropdownMeetingLocation, setDropdownMeetingLocation] = useState("Powell");
    const [otherMeetingLocation, setOtherMeetingLocation] = useState("");
    const [tag, setTag] = useState("Books");

    const [finalMeetingLocation, setFinalMeetingLocation] = useState("");
    // this is the actual one that gets submitted to the database, after considering the user's
    // input into the dropdown menu and the other location textbox


    // for redirecting to homepage on submission
    let history = useHistory();



    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleDropdownLocationChange = (event) => {
        setDropdownMeetingLocation(event.target.value);
        setFinalMeetingLocation(event.target.value);

        if (event.target.value === "Other") {
            setFinalMeetingLocation(otherMeetingLocation);
        }
    }

    const handleOtherLocationChange = (event) => {
        setOtherMeetingLocation(event.target.value);

        // only change the location if the "other" dropdown option has been selected
        if (dropdownMeetingLocation === "Other") {
            setFinalMeetingLocation(event.target.value);
        }
    }

    const handleTagChange = (event) => {
        setTag(event.target.value);
    }

    // don't know how to deal with uploaded images yet






    // console.log(title);
    // console.log(price);
    // console.log(description);
    // console.log(dropdownMeetingLocation);
    // console.log(otherMeetingLocation);
    // console.log(finalMeetingLocation);
    // console.log(tag);


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("submitted")

        // title, price, description, meetinglocation, tag
        let newPost = [{displayName: "Fred", username: "fred", tag: tag, 
        date: "3/4/2021", title: title, price: price, text: description}]

        let newPostsArray = newPost.concat(posts);

        setPosts(newPostsArray);

        // redirects to homepage
        history.push("/personal");
    }


  return (
      <div className="makepost">
        <h1>Make a New Post</h1>

        {/* <DropdownMultiselect
        options={["Australia", "Canada", "USA", "Poland", "Spain", "France"]}
        name="countries"
        /> */}


        <div className="makepostForm">
            <Form onSubmit={handleSubmit} >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Price ($)</Form.Label>
                    <Form.Control type="text" placeholder="Price" value={price} onChange={handlePriceChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} value={description} onChange={handleDescriptionChange} />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="(optional) Upload images" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Meeting Location</Form.Label>
                    <Form.Control as="select" value={dropdownMeetingLocation} onChange={handleDropdownLocationChange} >
                    <option>Powell</option>
                    <option>Boelter Hall</option>
                    <option>Royce</option>
                    <option>Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>(optional) If selected other meeting location, please specify:</Form.Label>
                    <Form.Control type="text" placeholder="Other location" value={otherMeetingLocation} onChange={handleOtherLocationChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control as="select" value={tag} onChange={handleTagChange} >
                    <option>Books</option>
                    <option>Furniture</option>
                    <option>Swipes</option>
                    </Form.Control>
                </Form.Group>
                {/* <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Tags (please select all that apply)</Form.Label>
                    <p></p>
                    <b>### Need to fix this, it doesn't work if you press the select/deselect all button ###</b>
                    <DropdownMultiselect
                    options={["Books", "Furniture", "Swipes"]}
                    name="tags"
                    />
                </Form.Group> */}
                <Button onClick={handleChangeInputTitle} variant="primary" type="submit">Post</Button>
            </Form>
        </div>
      </div>
  );
}

export default MakePost;