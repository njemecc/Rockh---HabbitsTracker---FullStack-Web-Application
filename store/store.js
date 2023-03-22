
import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./userSlice";
import habbitSlice from "./habbitSlice";

 const store = configureStore({
    reducer:{
        user:userSlice.reducer,
        habbit:habbitSlice.reducer
    }
})


export default store