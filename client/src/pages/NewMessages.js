import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Grid,
  useTheme,
  Button,
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
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "../components/Sidebar";
import Conversation from "../components/Conversation";
// Chat design reference https://medium.com/@awaisshaikh94/chat-component-built-with-react-and-material-ui-c2b0d9ccc491

const ChatSection = styled(Stack)(({ theme }) => ({
  width: "98%",
  height: "80vh",
  // minHeight: "100px",
  marginLeft: "1%",
  marginRight: "1%",
  backgroundColor: theme.palette.darkPurple,
  color: theme.palette.white,
  border: "1px solid white",
  borderRadius: "10px",
  direction:"row"
}));

const BorderRight500 = styled(Grid)(({ theme }) => ({
  borderRight: "1px solid white",
  height: "100%",
}));

const MessageArea = styled(List)(({ theme }) => ({
  height: "87.5%",
  overflowY: "auto",
  minHeight: "10%",
  maxHeight: "750px",
  borderBottom: "1px solid white",
}));

const LeftChatContainer = styled(ListItem)(({ theme }) => ({
  color: theme.palette.white,
  backgroundColor: theme.palette.medPurple,
}));

//styles
const RightSideMessage = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.medPurple,
  width: "40%",
  marginLeft: "auto",
  paddingRight: "10px",
  color: theme.palette.white,
  borderRadius: "10px",
}));

const LeftSideMessage = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.green,
  width: "40%",
  paddingLeft: "10px",
  color: theme.palette.black,
  borderColor: theme.palette.white,
  borderRadius: "10px",
}));

const TimeStamp = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
}));

const TypingField = styled(TextField)({
  borderColor: theme.palette.white,

  "& label.Mui-focused": {
    color: theme.palette.white,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.white,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.white,
      color: theme.palette.white,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.white,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.white,
    },
  },
  input: {
    
    color: theme.palette.white,
    color: theme.palette.white,
    "&::placeholder": {
      color: theme.palette.white,
      color: theme.palette.white,
    },
  },
});

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

const ActionButton = styled(Button)({
  background: "#3FFF80",
  color: theme.palette.primary,
  fontWeight: 900,
  textTransform: "capitalized",
  marginLeft: "20px",
  borderRadius: 50,
  "&:hover": {
    backgroundColor: "rgba(63,255,128,.8)",
  },
  "&:active": {
    backgroundColor: "rgba(63,255,128,.8)",
  },
  "&:focus": {
    backgroundColor: "rgba(63,255,128,.8)",
  },
});

const NewMessages = ({ socket }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState(null);

  const [messagesRecieved, setMessagesReceived] = useState([]);
  const inputRef = useRef();
  const theme = useTheme();
 

  const handleMessageChange = (event) => {
    // event.preventDefault();
    setMessage(event.target.value)
    // console.log(message)
  }

  //replace dispatch() with socket.emit()//
  const handleMessageSubmit = (event) => {
    event.preventDefault(); 
    if (message === "") return
    console.log(message)
    socket.emit('send_message', message)
      // dispatch(
      //     sendMessage({
      //         messageId: uuidv4(),
      //         messageContent: message,
      //         timeStamp: new Date().toLocaleString(),
      //       })
      //     );
          setMessage('');
        };
  
  // conversation change
  const handleConversationChange = (event) => {
    setConversation(event.target)
    console.log(conversation)
  }

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
    <div>
      <Navbar />
      <ChatSection component={Paper} elevation={0}>
        {/* left side contacts / conversations */}
        <Sidebar socket={socket} />
     
        {/* This is the individual chat section */}
        <Stack direction="column">
          <Box>
            <Conversation sx={{ width:'70%', height: '60%'}} socket={socket}/>
          </Box>
          <Divider />
          
          <Box component={"form"} onSubmit={handleMessageSubmit}>
            <Stack direction="row" sx={{padding:0}}>
              <TypingField
                name="message"
                id="message"
                value={message}
                onChange={handleMessageChange}
                placeholder="Type Something"
                fullWidth
              />
              <ActionButton type="submit">S e n d</ActionButton>
            </Stack>
          </Box>
        </Stack>
            
      </ChatSection>
      
    </div>
  );
};

export default NewMessages;
