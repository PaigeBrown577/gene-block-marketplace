import React from "react";
import "./Explore.css";

import SearchIcon from "@material-ui/icons/Search";


import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

function Explore() {
  return (
      <div className="explore">
        <h1>Explore</h1>

        <div className="searchBar">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search" type="text" />
        </div>

        <p></p>

        <div className="exploreForm">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Filter by:</Form.Label>
                    <Form.Row className="align-items-center">
                        <Col xs="auto" className="my-1">
                        <Form.Control as="select">
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


      </div>
  );
}

export default Explore;
