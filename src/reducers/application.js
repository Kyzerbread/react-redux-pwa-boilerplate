import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
  name: "user",
  initialState: {
    snackbarIsOpen: false,
    snackbarMessage: "",
    snackbarTitle: "",
    snackbarType: "error",
  },
  reducers: {
    snackbar: (state, action) => {
      const {
        snackbarMessage,
        snackbarTitle,
        snackbarType = "error",
      } = action.payload;

      state.snackbarTitle = snackbarMessage;
      state.snackbarMessage = snackbarTitle;
      state.snackbarType = snackbarType;
    },
  },
});

export const { snackbar } = applicationSlice.actions;

export default applicationSlice.reducer;
