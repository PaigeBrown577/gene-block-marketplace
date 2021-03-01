import React from "react";
import "./Messages.css";


import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Messages() {
  return (
    <div className="messages">
      <h1>Messages</h1>

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
        </Form>
      </Popup>

      <br/>
      <hr/>
      <p>message1</p>


      <br/>
      <hr/>
      <p>message2</p>

      <br/>
      <hr/>
      <p>message3</p>

      <br/>

    </div>
  );
}

export default Messages;