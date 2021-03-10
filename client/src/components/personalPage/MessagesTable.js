import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
    fontSize: 14,
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

function createData(subject, fromEmail, text) {
    return { subject, fromEmail, text, read: false };
  }

const rows = [
    createData("u up ;)", "CadeMeraz@ucla.com", "Rohit wake up"),
    createData("looking for husband", "RohitGouldthorpe@ucla.com", "hackathon time"),
    createData("1", "RyanRosenthal@ucla.com", "11"),
    createData("2", "AmritaChew@ucla.com", "12"),
    createData("3", "VarshiniFengel@ucla.com", "13"),
    createData("4", "PallaviDaruwala@ucla.com", "14"),
];

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

function ViewMorePopup ({subject, fromEmail, text, userID, setUserID}) {
    return (
        <Popup trigger={<Button variant="primary" >View more</Button>} modal>
          {close => ( 
          <div>
              <div className="header"> <b>{subject}</b> </div>
              <p>from {fromEmail}</p>

              <p></p>

              <div>{text}</div>

              <p></p>

              <SendNewMessage userID={userID} setUserID={setUserID} replyTo={fromEmail} buttonMessage="Reply" />
              <Button variant="primary" onClick={handleReadClick}>Mark as read</Button>
              <Button variant="primary" onClick={() => {close()}}>Close</Button>

          </div>   
          )}
      </Popup>
    );
}


export default function MessagesTable({userID, setUserID}) {
  const classes = useStyles();

  const [searchbarValue, setSearchbarValue] = useState("");

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

    return lowercaseSubject.includes(search) || lowercaseFromEmail.includes(search);

  })


  return (
    <div> 
        <div className="searchBar">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search" type="text" value={searchbarValue} onChange={handleSearchbarChange} />
            {shouldDisplayClearButton && <button onClick={handleClearClick}>clear</button>} 
        </div>

        <p></p>


    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell align="right">From</StyledTableCell>
            <StyledTableCell align="right">View More</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredMessages.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.subject}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fromEmail}</StyledTableCell>
              <StyledTableCell align="right"> <ViewMorePopup subject={row.subject} fromEmail={row.fromEmail} text={row.text} userID={userID} setUserID={setUserID} /> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
  );
}
