import React, { useState, useEffect } from 'react';
import ListItem from "@mui/material/ListItem";
import { Grid, Typography, styled, List } from "@mui/material";

const RightSideMessage = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.medPurple,
    width: "auto",
    marginLeft: "auto",
    paddingRight: "10px",
    color: theme.palette.lightGreen,
    borderRadius: "10px",
  }));

  const LeftSideMessage = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.teal,
    width: "auto",
    paddingLeft: "10px",
    color: theme.palette.darkPurple,
    borderRadius: "10px",
  }));
  
  const TimeStamp = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
  }));
  

const Conversation = ({ socket }) => {
    const [messagesRecieved, setMessagesReceived] = useState([]);

  // Runs whenever a socket event is recieved from the server
  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          __createdtime__: data.__createdtime__,
        },
      ]);
    });

	// Remove event listener on component unmount
    return () => socket.off('receive_message');
  }, [socket]);

  // dd/mm/yyyy, hh:mm:ss
  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }
  return (
    
    <List>
      {messagesRecieved.map((msg, i) => (
        <ListItem key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span >{msg.username}</span>
            <span >
              {formatDateFromTimestamp(msg.__createdtime__)}
            </span>
          </div>
          <p >{msg.message}</p>
          <br />
        </ListItem>
      ))}
    </List>
  )
}

export default Conversation