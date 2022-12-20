import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = { 
    currentMessage: [{
        messageId: 1,
        messageContent: "Hey man, What's Up?",
        timeStamp: "09:30"
    },
    {
        messageId: 2,
        messageContent: "Hey, I am Good! What about you ?",
        timeStamp: "09:31"
    },
    {
        messageId: 3,
        messageContent: "Cool. I am good, let's catch up!",
        timeStamp: "10:30"
    }]
}

// selectAllMessages
// selectMessageById

export const messageSlice = createSlice({
    name:"message",
    initialState,
    reducers: {
        sendMessage: (state, action) => {
            state.currentMessage.push(action.payload)
        },
    }
});

export const { sendMessage } = messageSlice.actions;

export const messageReducer = messageSlice.reducer;


export const selectCurrentMessage = (state) => state.message.currentMessage;

// Get(conversation) --> onClick() event on the left side of messages page, should get the conversation between the currently logged in user and the contact that is clicked

// Post() --> onClick() event of the send button to the right of the text field where the currently logged in user with post() or append their message to the current conversation 

