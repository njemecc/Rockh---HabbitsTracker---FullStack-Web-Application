"use client";
import { createSlice } from "@reduxjs/toolkit";

const habbitInitialState = {
  open: false,
  habbitAdded: false,
  date: "",
  dateChanged: false,
  changeOpen: false,
  isLoading: true,
  datePicker: true,
};

const habbitSlice = createSlice({
  name: "habbit",
  initialState: habbitInitialState,
  reducers: {
    changeOpenState(state) {
      state.open = !state.open;
    },
    changeHabbitAdded(state) {
      state.habbitAdded = !state.habbitAdded;
    },
    changeDate(state, payload) {
      state.date = payload.payload;
    },
    dateChanged(state) {
      state.dateChanged = !state.dateChanged;
    },
    changeOpenChanged(state) {
      state.changeOpen = !state.changeOpen;
    },
    isLoadingChange(state) {
      state.isLoading = false;
    },
    changeDatePickerFalse(state) {
      state.datePicker = false;
    },
    changeDatePickerTrue(state) {
      state.datePicker = true;
    },
  },
});

export const habbitActions = habbitSlice.actions;
export default habbitSlice;
