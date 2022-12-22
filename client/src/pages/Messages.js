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
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// Chat design reference https://medium.com/@awaisshaikh94/chat-component-built-with-react-and-material-ui-c2b0d9ccc491

const ChatSection = styled(Grid)(({ theme }) => ({
    width: '98%',
    height: "80vh",
    // minHeight: "100px",
    marginLeft:"1%",
    marginRight:"1%",
    backgroundColor: theme.palette.darkPurple,
    color: theme.palette.white,
    border: "1px solid white",
    borderRadius: "10px"

}))

const BorderRight500 = styled(Grid)(({ theme }) => ({
    borderRight: "1px solid white",
    height: "100%",
}))

const MessageArea = styled(List)(({ theme }) => ({
    height: '87.5%',
    overflowY: 'auto',
    // minHeight: "10%",
    maxHeight: "600px",
    borderBottom: "1px solid white"
   
}))
 
const LeftChatContainer = styled(ListItem)(({ theme }) => ({
    color: theme.palette.white,
    backgroundColor: theme.palette.medPurple,
    
}))

//styles
const RightSideMessage = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.medPurple,
    width: "40%",
    marginLeft: "auto",
    paddingRight: "10px",
    color: theme.palette.white,
    borderRadius: "10px"
}))

const LeftSideMessage = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.green,
    width: "40%",
    paddingLeft: "10px",
    color: theme.palette.black,
    borderColor:theme.palette.white,
    borderRadius: "10px"
}))

const TimeStamp = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
}));

const TypingField = styled(TextField)({
    borderColor: theme.palette.white,
    
    '& label.Mui-focused': {
      color: theme.palette.white,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.white,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.white,
        color: theme.palette.white
      },
      '&:hover fieldset': {
        borderColor: theme.palette.white,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.white,
      },
    },
    'input':{
        color: theme.palette.white,
        color: theme.palette.white,
        '&::placeholder':{
            color: theme.palette.white,
            color: theme.palette.white,
        },
        
    }
});

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 50,
    backgroundColor: theme.palette.green,
    marginLeft: 5,
    marginRight: 5,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        width: "auto"
    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    color: 'black',
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
    align: 'center',
    textAlign: 'center',
    "& .MuiInputBase-input": {
        textAlign: 'center',
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`
    }
}
));

const ActionButton = styled(Button)({
    background: "#3FFF80",
    color: 'black',
    fontWeight: 900,
    textTransform: 'capitalized',
    marginLeft: '20px',
    borderRadius: 50,
    '&:hover': {
      backgroundColor: 'rgba(63,255,128,.8)'
  
    },
    '&:active': {
      backgroundColor: 'rgba(63,255,128,.8)'
    },
    '&:focus': {
      backgroundColor: 'rgba(63,255,128,.8)'
    },
  
  })


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
            <ChatSection container component={Paper} elevation={0}  >
                <BorderRight500 item xs={3}>
                    <Grid container marginLeft="15px" marginBottom="5px" marginTop="5px" wrap="nowrap"  >
                        <Grid item xs={5} >
                            <Typography variant="h5" className="header-message" sx={{color: theme.palette.white}}>Chat</Typography>   
                        </Grid>
                        <Grid container item xs={7} justifyContent="flex-end" marginRight="20px"  marginTop="auto" marginBottom="auto" >
                            <Stack direction="row" spacing={0.5} sx={{display: {xs:'none',md:"flex"}}}>
                                {/* add a tooltip for when hovering over the button */}
                                <Tooltip title="More">
                                    <Avatar alt="dot dot dot" sx={{ maxWidth:30, maxHeight: 30}}>
                                        <MoreHorizIcon />
                                    </Avatar>
                                </Tooltip>
                                <Tooltip title="Add Media">
                                    <Avatar alt="add a photo" sx={{ maxWidth:30, maxHeight: 30}}>
                                        <VideoCallIcon />
                                    </Avatar>
                                </Tooltip>
                                <Tooltip title="New Message">
                                    <Avatar alt="add a post" sx={{ maxWidth:30, maxHeight: 30}}>
                                        <PostAddIcon />
                                    </Avatar>
                                </Tooltip>
                            </Stack>
                        </Grid>
                    </Grid>
                 
                    <Grid item xs={12} style={{padding: '10px'}} >
                        {/* SEARCH COMPONENT */}
                        <Search >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search"
                                    inputProps={{ "aria-label": "search" }}
                                    sx={{ border: 1, textAlign: 'center', }}
                                />
                            </Search >
                    </Grid>
                    <Divider />
                    <List sx={{paddingTop:"0px"}}>
                        <LeftChatContainer button key="RemySharp"  >
                            <ListItemIcon>
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                            </ListItemIcon>
                            <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                            <ListItemText secondary="online" secondaryTypographyProps={{style: {color: "white"}}} align="right"></ListItemText>
                        </LeftChatContainer>
                        <Divider />
                        <LeftChatContainer button key="Alice">
                            <ListItemIcon>
                                <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                            </ListItemIcon>
                            <ListItemText primary="Alice">Alice</ListItemText>
                        </LeftChatContainer>
                        <Divider />
                        <LeftChatContainer button key="CindyBaker">
                            <ListItemIcon>
                                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
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
                            </RightSideMessage> */}
                        {/* </ListItem> */}
                    </MessageArea>
                    <Divider />
                    <Grid container spacing={1} style={{margin: '15px'}} paddingRight="30px" >
                        <Grid item xs={11} >
                            <TypingField fullWidth id="outlined-basic" placeholder="Type Something"/>
                        </Grid>
                        <Grid item xs={1} align="center" marginTop="auto" marginBottom="auto">
                            <Button 
                                variant="contained"
                            
                                sx={{
                                    bgcolor:theme.palette.medPurple,
                                    color: theme.palette.white,
                                    '&:hover': {
                                        bgcolor:theme.palette.darkPurple,
                                        color: theme.palette.white,
                                    }
                                }}
                            >Send</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </ChatSection>


        </div>
    )
}
