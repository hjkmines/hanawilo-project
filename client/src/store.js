import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/usersSlice";
import { messageReducer } from "./features/messagesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});
