import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Image from 'react';
import api from '../../api';
import swal from 'sweetalert';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Button from "react-bootstrap/Button";

import SearchIcon from "@material-ui/icons/Search";
import "../../styles/PostHistoryTable.css"

import FlipMove from "react-flip-move";

import SendNewMessage from "./SendNewMessage";
import { useHistory } from 'react-router-dom';

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




const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ViewMorePopup ({title, tag, price, text, image, date, meeting_location, user, _id}) {
  console.log(_id);
    return (
        <Popup trigger={<Button variant="primary">View more</Button>} modal>
          {close => (
          <div>
              <div className="header" className="popUpText"> <b>{title}</b> </div>
              <div>Tag: {tag}</div>
              <div>Posted on {date} </div>
              <div>Price: ${price} </div>
              <div>Meeting Location: {meeting_location} </div>

              <p></p>

              <p>{text}</p>

              <p></p>

              {/* <Button color="#1DA1F2" variant="primary" onClick={() => handleDeleteClick(_id)}>Delete Post</Button> */}
              <div className="divider"></div>
              <Button variant="primary" onClick={() => {close()}}>Close</Button>

          </div>
          )}
      </Popup>
    );
}


function PostHistoryTable({user, posts, setPosts}) {
  const classes = useStyles();

  const [searchbarValue, setSearchbarValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  let history = useHistory();

  function refreshPage() {
    window.location.reload(false);
  }


  // need to delete from the database
  function handleDeleteClick(id) {
    console.log("hello", id);
    api.deletePostById(id);
    // swal("Deleted post!");

    // redirect back to this pages
    // history.push(`/personal/postHistory/${user._id}`);

    refreshPage();
  }



  const getPosts = async () => {
    await api.getAllPosts().then(post => {
      // console.log(post.data.data)
      // if(post.data.data !== posts)
        setPosts(post.data.data)
    })
  }

  useEffect(getPosts, []);

  let tempFilteredPosts = posts.filter((post) => {
    //   console.log(post.email, user.email);
      return post.email === user.email;
    })


  const handleSearchbarChange = (event) => {
    setSearchbarValue(event.target.value);
  }

  const handleClearClick = () => {
    setSearchbarValue("");
  }

  const shouldDisplayClearButton = searchbarValue.length > 0;

  // need to filter out posts, only get the ones written by the current user
  // let filteredPosts = posts;

  // console.log(posts.length);
  // console.log(tempFilteredPosts.length);
  // console.log(filteredPosts.length);


  let searchFilteredPosts = tempFilteredPosts.filter((post) => {
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


    <TableContainer component={Paper} className="table">
      <Table className={classes.table} aria-label="customized table"> 
        <TableHead>
          <TableRow>
            <StyledTableCell class="th" align="left">Title</StyledTableCell>
            <StyledTableCell align="left" class = "th">Tag</StyledTableCell>
            <StyledTableCell align="center" class="th">View More</StyledTableCell>
            <StyledTableCell align="center" class="th">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchFilteredPosts.map((post, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="td" scope="row" class="td">
                {post.title}
              </StyledTableCell>
              <StyledTableCell align="left" class="td">{post.tag}</StyledTableCell>
              <StyledTableCell align="center" class="td"> <ViewMorePopup title={post.title} tag={post.tag} price={post.price} text={post.text} image={post.image} date={post.date} meeting_location={post.meeting_location} user={user} _id={post._id}/> </StyledTableCell>
              <StyledTableCell align="center" class="td"><Button variant="primary" onClick={() => handleDeleteClick(post._id)}> Delete</Button></StyledTableCell> 
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
  );
}


export default PostHistoryTable;