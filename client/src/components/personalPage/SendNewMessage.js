import React from "react";
import "../../styles/SendNewMessage.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function SendNewMessage() {
    return (
        <Popup trigger={<Button variant="primary" type="submit">Send new message</Button>} modal>
            <div className="header"> <b>New message</b> </div>

            <p></p>

            <Form>
                <Form.Group controlId="recipient">
                    <Form.Label>To:</Form.Label>
                    <Form.Control type="text" placeholder="Recipient" />
                    <Form.Text className="text-muted">
                        Please enter their username.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="messageContent">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Button variant="primary" type="submit">Send message</Button>
                <Button variant="primary" type="submit">Cancel</Button>
                {/* <Link to="/personal">
                    <Button variant="primary" type="button">Go to home</Button>
                </Link> */}
            </Form>
      </Popup>

    );
}

export default SendNewMessage;