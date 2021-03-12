import React, { Component , useState} from "react";
import "../../styles/MakePost.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import swal from 'sweetalert';

import api, {getPostById, getUserByID } from "../../api"

import { useHistory } from "react-router-dom";

import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { useRadioGroup } from "@material-ui/core";

function MakePost({ posts, setPosts, user, setUser }) {

    const[displayName, setDisplayName] = useState("");
    // const[username, setUsername] = useState("");
    const [tag, setTag] = useState("Books");
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [dropdownMeetingLocation, setDropdownMeetingLocation] = useState("Powell");
    const [otherMeetingLocation, setOtherMeetingLocation] = useState("");

    const [finalMeetingLocation, setFinalMeetingLocation] = useState("Powell");
    // this is the actual one that gets submitted to the database, after considering the user's
    // input into the dropdown menu and the other location textbox


    // for redirecting to homepage on submission
    let history = useHistory();


    let fileInput = React.createRef();


    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleImageChange = (event) => {
        // var input = document.getElementById(event.target.value);
        // var fReader = new FileReader();
        // console.log(input);
        // fReader.readAsDataURL(input.files[0]);
        // fReader.onloadend = function(event){
        //     var img = document.getElementById("exampleFormControlFile1");
        //     img.src = event.target.result;
        // }
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

    function validateForm() {
        return title.length > 0 && price.length > 0;
      }
  


    // don't know how to deal with uploaded images yet


    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log(fileObject);
        // this is an object
        // it has a length property

        const name = user.name;
        setDisplayName(name);

        // console.log(image);
        // let newPost = [{displayName: name, tag: tag, title: title, date: date, price: price, text: description, meeting_location: finalMeetingLocation, image: image, displayDeleteButton: true}]
        // let newPostsArray = newPost.concat(posts);

        // setPosts(newPostsArray);
        // imageArray = imageArray[0];
        const userID = user._id;
        const email = user.email;
        const payload = {name, tag, date, title, price, description, finalMeetingLocation, userID, email};

        api.insertPost(payload).then(res => {
            swal("Post uploaded successfully!", "", "success");
        })

        // redirects to homepage
        // history.push(`/personal/home/${user._id}`);


    }


  return (
      <div className="makepost">
       <h1 className="makepost_title">Create New Listing</h1>

        {/* <DropdownMultiselect
        options={["Australia", "Canada", "USA", "Poland", "Spain", "France"]}
        name="countries"
        /> */}


        <div className="makepostForm">
            <Form onSubmit={handleSubmit} >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control className="inputBoxes" type="text" placeholder="Title" value={title} onChange={handleTitleChange} required />
                </Form.Group>
                <Form.Group size = "lg" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price ($)</Form.Label>
                    <Form.Control className="inputBoxes" type="number" placeholder="Price" min="0.00" step="0.01" value={price} onChange={handlePriceChange} required/>
                </Form.Group>
                <Form.Group size = "lg" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control className="inputBoxes" as="textarea" rows={5} value={description} onChange={handleDescriptionChange} />
                </Form.Group>
                <Form.Group size = "lg" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Meeting Location</Form.Label>
                    <Form.Control className="inputBoxes" as="select" value={dropdownMeetingLocation} onChange={handleDropdownLocationChange} >
                    <option>Powell</option>
                    <option>Boelter Hall</option>
                    <option>Royce</option>
                    <option>Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group size = "lg" controlId="exampleForm.ControlInput1">
                    <Form.Label>If selected other meeting location, please specify:</Form.Label>
                    <Form.Control className="inputBoxes" type="text" placeholder="Other location" value={otherMeetingLocation} onChange={handleOtherLocationChange} />
                </Form.Group>
                <Form.Group size = "lg" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control className="inputBoxes" as="select" value={tag} onChange={handleTagChange} >
                    <option>Books</option>
                    <option>Furniture</option>
                    <option>Swipes</option>
                    <option>Other</option>
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
                <Button variant="primary" type="submit" disabled={!validateForm()}>Post</Button>
            </Form>
        </div>
      </div>
  );
}

export default MakePost;