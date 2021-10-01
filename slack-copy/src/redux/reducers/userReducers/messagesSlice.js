import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: []
};
const slice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        messageReducer: (state, action) => {
            state.messages = [...state.messages, action.payload]
        },
        initialMessageReducer: (state, action) => {
            state.messages = [];
        },
        messageReplaceReducer: (state, action) => {
            state.messages = [...action.payload]
        }
    }
});

export default slice.reducer;
export const { messageReplaceReducer, messageReducer, initialMessageReducer } = slice.actions;
