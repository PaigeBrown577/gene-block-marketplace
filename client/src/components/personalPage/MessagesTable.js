import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../../api';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../../styles/MessagesTable.css"

import Button from "react-bootstrap/Button";

import SearchIcon from "@material-ui/icons/Search";

import FlipMove from "react-flip-move";

import SendNewMessage from "./SendNewMessage";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }



function createData(subject, toEmail, fromEmail, text) {

  //  await api.getAllMessages().then(messages => {
  //     console.log(messages.data.data);
  // })
    return { subject, toEmail, fromEmail, text};
  }


// let rows = [
//     createData("u up ;)", "CadeMeraz@ucla.com", "Rohit wake up"),
//     createData("looking for husband", "RohitGouldthorpe@ucla.com", "hackathon time"),
//     createData("1", "RyanRosenthal@ucla.com", "11"),
//     createData("2", "AmritaChew@ucla.com", "12"),
//     createData("3", "OliveSatoor@ucla.com", "13"),
//     createData("4", "VarshiniFengel@ucla.com", "14"),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const handleReadClick = () => {
    // set the 'read' field on the message
    // this is how we can keep track of read messages

    // i couldn't get it to work without adding an extra "mark as read" button, basically I
    // couldn't get it to run automatically when you press view more
    // it's ugly but it works

    console.log("message read");
    alert("Message marked as read");

}

function ViewMorePopup ({subject, fromEmail, text, user}) {
    return (
        <Popup trigger={<Button variant="primary" >View more</Button>} modal>
          {close => ( 
          <div>
              <div className="header"> <b>{subject}</b> </div>
              <p>from {fromEmail}</p>

              <p></p>

              <div>{text}</div>

              <p></p>

              <SendNewMessage user={user} replyTo={fromEmail} buttonMessage="Reply" />
              <div className="divider"></div>
              <Button variant="primary" onClick={handleReadClick}>Mark as read</Button>
              <div className="divider"></div>
              <Button variant="primary" onClick={() => {close()}}>Close</Button>

          </div>
          )}
      </Popup>
    );
}


export default function MessagesTable({user}) {
  const classes = useStyles();

  const [searchbarValue, setSearchbarValue] = useState("");
  const [messages, setMessages] = useState([]);


  // let messageData1 = [];
  // let tempRows1 = [];
  // const getMessages1 = () => {
  //   api.getAllMessages().then(message => {
  //     messageData1 = message.data.data;
  //     setMessages(message.data.data)

  //   for (let i  = 0; i < messageData1.length; i++){
  //     tempRows1.push(createData(messageData1[i].subject, messageData1[i].toEmail, messageData1[i].fromEmail, messageData1[i].text));
  //   }
  // })
  // }

  // getMessages1();


  const [rows, setRows] = useState([]);

  useEffect(() => {
    let messageData = [];

    const getMessages = async () => {
      await api.getAllMessages().then(message => {
        messageData = message.data.data;
        setMessages(message.data.data)

      let tempRows = [];
      console.log(messageData);
      for (let i  = 0; i < messageData.length; i++){
        tempRows.push(createData(messageData[i].subject, messageData[i].toEmail, messageData[i].fromEmail, messageData[i].text));
      }
      console.log(tempRows);
      setRows(tempRows);
    })
    }

    getMessages();
}, [])

  const handleSearchbarChange = (event) => {
    setSearchbarValue(event.target.value);
  }

  const handleClearClick = () => {
    setSearchbarValue("");
  }

  const shouldDisplayClearButton = searchbarValue.length > 0;

  let filteredMessages = rows.filter((row) => {
    let search = searchbarValue.toLowerCase();

    let lowercaseSubject = row.subject.toLowerCase();
    let lowercaseFromEmail = row.fromEmail.toLowerCase();

    return (lowercaseSubject.includes(search) || lowercaseFromEmail.includes(search)) && row.toEmail === user.email;

  })

  const hasMessages = filteredMessages.length > 0;

  return (
    <div> 

      <div className="messageTableComponent">
        <div className="searchBar">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search" type="text" value={searchbarValue} onChange={handleSearchbarChange} />
            {shouldDisplayClearButton && <button onClick={handleClearClick}>clear</button>} 
        </div>

        <p></p>

        <TableContainer component={Paper} className="table">
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell class="th">Subject</StyledTableCell>
                <StyledTableCell class="th" align="center">From</StyledTableCell>
                <StyledTableCell class="th" align="center">View More</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredMessages.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row" class="td">
                    {row.subject}
                  </StyledTableCell>
                  <StyledTableCell align="left" class="td">{row.fromEmail}</StyledTableCell>
                  <StyledTableCell align="center" class="td"> <ViewMorePopup subject={row.subject} fromEmail={row.fromEmail} text={row.text} user={user} /> </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>


    </div> 
  );
}
