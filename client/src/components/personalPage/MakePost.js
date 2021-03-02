import React from "react";
import "./MakePost.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

function MakePost() {

  return (
      <div className="makepost">
        <h1>Make a New Post</h1>

        {/* <DropdownMultiselect
        options={["Australia", "Canada", "USA", "Poland", "Spain", "France"]}
        name="countries"
        /> */}


        <div className="makepostForm">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Price ($)</Form.Label>
                    <Form.Control type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="(optional) Upload images" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Meeting Location</Form.Label>
                    <Form.Control as="select">
                    <option>Powell</option>
                    <option>Boelter Hall</option>
                    <option>Powell</option>
                    <option>Royce</option>
                    <option>Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>(optional) If selected other meeting location, please specify:</Form.Label>
                    <Form.Control type="text" placeholder="Other location" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control as="select">
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
                <Button variant="primary" type="submit">Post</Button>
            </Form>
        </div>



        
      </div>
  );
}

export default MakePost;