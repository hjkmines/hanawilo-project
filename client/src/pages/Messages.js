import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Container,
  Grid,
  useTheme,
  Button,
  ListItemButton,
  Avatar,
  Paper,
  styled,
  Divider,
  Stack,
  Tooltip,
  Box,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { theme } from "../theme";
import { useSelector } from "react-redux";
import IntialConversation from "../components/IntialConversation";
import { selectCurrentMessage, sendMessage } from "../features/messagesSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

// Chat design reference https://medium.com/@awaisshaikh94/chat-component-built-with-react-and-material-ui-c2b0d9ccc491

const ChatSection = styled(Grid)(({ theme }) => ({
  width: "98%",
  height: "90%",
  minHeight: "600px",
  marginLeft: "1%",
  marginRight: "1%",
  backgroundColor: theme.palette.lightGreen,
  color: "#7785AC",
}));

const BorderRight500 = styled(Grid)(({ theme }) => ({
  borderRight: "1px solid #7785AC",
}));

const MessageArea = styled(List)(({ theme }) => ({
  height: "85%",
  overflowY: "auto",
  minHeight: "10%",
}));

const LeftChatContainer = styled(ListItem)(({ theme }) => ({
  color: theme.palette.lightGreen,
  backgroundColor: theme.palette.medPurple,
}));

//styles
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

const TypingField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#360568",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#360568",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#7785AC",
      color: "#360568",
    },
    "&:hover fieldset": {
      borderColor: "#360568",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#360568",
    },
  },
  input: {
    color: "#360568",
    "&::placeholder": {
      color: "#360568",
    },
  },
});

const Messages = () => {
  const dispatch = useDispatch();
  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const message = {
      content: data.get("message"),
    };
    console.log(message.content);
    dispatch(
      sendMessage({
        messageId: uuidv4(),
        messageContent: message.content,
        timeStamp: new Date().toLocaleString(),
      })
    );
    
  };

  const theme = useTheme();

  return (
    <div>
      <Navbar />
      <ChatSection container component={Paper}>
        <BorderRight500 item xs={3}>
          <Grid
            container
            marginLeft="15px"
            marginBottom="5px"
            marginTop="5px"
            wrap="nowrap"
          >
            <Grid item xs={5}>
              <Typography
                variant="h5"
                className="header-message"
                sx={{ color: theme.palette.darkPurple }}
              >
                Chat
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={7}
              justifyContent="flex-end"
              marginRight="20px"
              marginTop="auto"
              marginBottom="auto"
            >
              <Stack
                direction="row"
                spacing={0.5}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {/* add a tooltip for when hovering over the button */}
                <Tooltip title="More">
                  <Avatar
                    alt="dot dot dot"
                    sx={{ maxWidth: 30, maxHeight: 30 }}
                  >
                    <MoreHorizIcon />
                  </Avatar>
                </Tooltip>
                <Tooltip title="Add Media">
                  <Avatar
                    alt="add a photo"
                    sx={{ maxWidth: 30, maxHeight: 30 }}
                  >
                    <VideoCallIcon />
                  </Avatar>
                </Tooltip>
                <Tooltip title="New Conversation">
                  <Avatar alt="add a post" sx={{ maxWidth: 30, maxHeight: 30 }}>
                    <PostAddIcon />
                  </Avatar>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TypingField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />

          {/* list of contacts */}
          <List sx={{ paddingTop: "0px" }}>
            <LeftChatContainer component={ListItemButton} key="RemySharp">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
              <ListItemText
                secondary="online"
                secondaryTypographyProps={{ style: { color: "white" } }}
                align="right"
              ></ListItemText>
            </LeftChatContainer>

            <Divider />

            <LeftChatContainer component={ListItemButton} key="Alice">
              <ListItemIcon>
                <Avatar
                  alt="Alice"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Alice">Alice</ListItemText>
            </LeftChatContainer>

            <Divider />

            <LeftChatContainer component={ListItemButton} key="CindyBaker">
              <ListItemIcon>
                <Avatar
                  alt="Cindy Baker"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
            </LeftChatContainer>

            <Divider />
          </List>
        </BorderRight500>

        {/* This is the individual chat section */}
        <Grid item xs={9}>
          <MessageArea>
            {/* if currentMessage ? currentMessage : intialConversation  */}
            <IntialConversation />
            {/* <ListItem key="1" >
                            <RightSideMessage container>
                                <Grid item xs={12}>
                                    <Typography align="right">Hey man, What's up ?</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TimeStamp align="right">09:30</TimeStamp>
                                </Grid>
                            </RightSideMessage>
                        </ListItem>
                        <ListItem key="2">
                            <LeftSideMessage container>
                                <Grid item xs={12}>
                                    <Typography align="left">Hey, I am Good! What about you ?</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TimeStamp align="left">09:31</TimeStamp>
                                </Grid>
                            </LeftSideMessage>
                        </ListItem>
                        <ListItem key="3">
                            <RightSideMessage container>
                                <Grid item xs={12}>
                                    <Typography align="right">Cool. i am good, let's catch up!</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TimeStamp align="right">10:30</TimeStamp>
                                </Grid>
                            </RightSideMessage>
                        </ListItem> */}
          </MessageArea>
          <Divider />

          {/* input for for text to send message */}
          {/* <Grid
            container
            spacing={1}
            style={{ margin: "15px" }}
            paddingRight="30px"
          > */}
            <Box component="form" onSubmit={handleMessageSubmit}>
              <Stack direction="row">
                <TypingField
                  required
                  fullWidth
                  id="message"
                  name="message"
                  placeholder="Type Something"
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    bgcolor: theme.palette.medPurple,
                    color: theme.palette.white,
                    "&:hover": {
                      bgcolor: theme.palette.darkPurple,
                      color: theme.palette.white,
                    },
                  }}
                >
                  Send
                </Button>
            </Stack>
            </Box>
          {/* </Grid> */}
        </Grid>
      </ChatSection>
    </div>
  );
};

export default Messages;
