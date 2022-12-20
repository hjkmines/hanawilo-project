import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentMessage } from "../features/messagesSlice";
import ListItem from "@mui/material/ListItem";
import { Grid, Typography, styled } from "@mui/material";

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

const IntialConversation = () => {
  const messages = useSelector(selectCurrentMessage);
  console.log(messages);
//messages[]
  return (
    <>
      {messages.map((message, index) => (
       
          <ListItem key={message.messageId}>
            {index % 2 === 0 ? <RightSideMessage container> <Grid item xs={12}>
                <Typography align= "right"> 
                {message.messageContent}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TimeStamp align="right">{message.timeStamp}</TimeStamp>
              </Grid>
            </RightSideMessage> : <LeftSideMessage container>
              <Grid item xs={12}>
                <Typography align="left"> 
                {message.messageContent}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TimeStamp align="left">{message.timeStamp}</TimeStamp>
              </Grid>
            </LeftSideMessage>}
          </ListItem>
   
      ))}
    </>
    );
}

export default IntialConversation;
