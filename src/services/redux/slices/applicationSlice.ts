import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
  name: "user",
  initialState: {
    applicationIsLoading: true,
    snackbarIsOpen: false,
    snackbarMessage: "",
    snackbarTitle: "",
    snackbarType: "error",
  },
  reducers: {
    loadingCompleted: (state) => {
      state.applicationIsLoading = false;
    },
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

export const { openSnackbar, closeSnackbar, loadingCompleted } =
  applicationSlice.actions;

export default applicationSlice.reducer;
