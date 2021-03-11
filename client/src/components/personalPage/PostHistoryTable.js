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


// need to delete from the database
const handleDeleteClick = () => {
    console.log("Deleted post");
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ViewMorePopup ({title, tag, price, text, image, date, meeting_location, user}) {
    return (
        <Popup trigger={<Button variant="primary">View more</Button>} modal>
          {close => ( 
          <div>
              <div className="header"> <b>{title}</b> </div>
              <div>Tag: {tag}</div>
              <div>Posted on {date} </div>
              <div>Price: ${price} </div>
              <div>Meeting Location: {meeting_location} </div>

              <p></p>

              <p>{text}</p>

              <p></p>

                <Button variant="primary" onClick={handleDeleteClick}>DELETE POST</Button>

              <Button variant="primary" onClick={() => {close()}}>Close</Button>

          </div>
          )}
      </Popup>
    );
}


export default function PostHistoryTable({user, posts, setPosts}) {
  const classes = useStyles();

  const [searchbarValue, setSearchbarValue] = useState("");

  const handleSearchbarChange = (event) => {
    setSearchbarValue(event.target.value);
  }

  const handleClearClick = () => {
    setSearchbarValue("");
  }

  const shouldDisplayClearButton = searchbarValue.length > 0;

  // need to filter out posts, only get the ones written by the current user
  let filteredPosts = posts;

  filteredPosts = posts.filter((post) => {
    console.log(post.email, user.email);
    return post.email === user.email;
  })

  let searchFilteredPosts = filteredPosts.filter((post) => {
    let search = searchbarValue.toLowerCase();

    let lowercaseTag = post.tag.toLowerCase();
    let lowercaseTitle = post.title.toLowerCase();

    return lowercaseTag.includes(search) || lowercaseTitle.includes(search);

    // filters by tag or title
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
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Tag</StyledTableCell>
            <StyledTableCell align="right">View More</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchFilteredPosts.map((post, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {post.title}
              </StyledTableCell>
              <StyledTableCell align="right">{post.tag}</StyledTableCell>
              <StyledTableCell align="right"> <ViewMorePopup title={post.title} tag={post.tag} price={post.price} text={post.text} image={post.image} date={post.date} meeting_location={post.meeting_location} user={user} /> </StyledTableCell>
              <StyledTableCell align="right"><Button variant="primary" onClick={handleDeleteClick}>DELETE POST</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
  );
}
