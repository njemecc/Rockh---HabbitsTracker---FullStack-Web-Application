"use client";
import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  email: "",
  isLoggedIn: false,
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    changeLoginState(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    addEmail(state, payload) {
      state.email = payload.payload;
    },
    addPhoto(state, payload) {
      state.photo = payload.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
