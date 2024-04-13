import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        auth: (state, action) => {
            state.user = action.payload;
        }

    }
});

export const { auth } = userSlice.actions;
export default userSlice.reducer