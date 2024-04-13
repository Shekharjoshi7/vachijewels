import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import auth from "./userSlice";
const store = configureStore({
    reducer: {
        allCart: cartReducer,
        users: auth
    },
})

export default store