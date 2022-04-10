import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: "Felipe"
    },
    reducers: {
        addUser: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;