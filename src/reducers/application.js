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
    openSnackbar: (state, action) => {
      const { message, title, type = "error" } = action.payload;

      state.snackbarTitle = message;
      state.snackbarMessage = title;
      state.snackbarType = type;
      state.snackbarIsOpen = true;
    },
    closeSnackbar: (state) => {
      state.snackbarIsOpen = false;
    },
  },
});

export const { openSnackbar, closeSnackbar } = applicationSlice.actions;

export default applicationSlice.reducer;
