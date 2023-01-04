import React, { useState } from "react";
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
import { useSelector } from "react-redux";
import IntialConversation from "../components/IntialConversation";
import { selectCurrentMessage, sendMessage } from "../features/messagesSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const BorderRight500 = styled(Grid)(({ theme }) => ({
    borderRight: "1px solid white",
    height: "100%",
  }));

const LeftChatContainer = styled(ListItem)(({ theme }) => ({
    color: theme.palette.white,
    backgroundColor: theme.palette.medPurple,
  }));

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 50,
    backgroundColor: theme.palette.green,
    marginLeft: 5,
    marginRight: 5,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));

const SearchIconWrapper = styled("div")(({ theme }) => ({
padding: theme.spacing(0, 2),
height: "100%",
color: "black",
position: "absolute",
pointerEvents: "none",
display: "flex",
alignItems: "center",
justifyContent: "center",
elevation: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    width: "100%",
    borderRadius: 50,
    align: "center",
    textAlign: "center",
    "& .MuiInputBase-input": {
      textAlign: "center",
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
  }));

const Sidebar = ({ socket }) => {
const theme = useTheme();

const conversations = [ 
    { recipient: {
        userName:"Remy Sharp",
        id: 1}
    } , 
    { recipient: {
        userName:"Tony Balogna",
        id: 2}
    } 
];


const [activeConversation, setActiveConversation] = useState(null);

const handleConversationChange = (e) => {
    socket.emit('join_room', {userName, room})
    setActiveConversation(e)
    console.log(userName, room, activeConversation)
}

  return (
    <Box sx={{width:'30%', height:"100%" , borderRight:1}}>
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
                sx={{ color: theme.palette.white }}
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
                <Tooltip title="New Message">
                  <Avatar alt="add a post" sx={{ maxWidth: 30, maxHeight: 30 }}>
                    <PostAddIcon />
                  </Avatar>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ padding: "10px" }}>
            {/* SEARCH COMPONENT */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                sx={{ border: 1, textAlign: "center" }}
              />
            </Search>
          </Grid>
          <Divider />
          <List sx={{ paddingTop: "0px" }}>
            <LeftChatContainer button key="RemySharp">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  
                />
              </ListItemIcon>
              <ListItemText component={Button} primary="Remy Sharp" onClick={handleConversationChange}>Remy Sharp</ListItemText>
              <ListItemText
                secondary="online"
                secondaryTypographyProps={{ style: { color: "white" } }}
                align="right"
              ></ListItemText>
            </LeftChatContainer>
            <Divider />
            <LeftChatContainer button key="Alice">
              <ListItemIcon>
                <Avatar
                  alt="Alice"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Alice">Alice</ListItemText>
            </LeftChatContainer>
            <Divider />
            <LeftChatContainer button key="CindyBaker">
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
    </Box>
  );
}

export default Sidebar;