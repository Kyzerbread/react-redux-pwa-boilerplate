import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    firstName: "",
    lastName: "",
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      state.firstName = "Jeremy";
      state.lastName = "Kyzer";
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
