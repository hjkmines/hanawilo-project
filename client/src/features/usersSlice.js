import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    curentUser: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return { ...state, setCurrentUser: action.payload};
        },
    }
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const selectCurrentUser = (state) => state.user.curentUser;