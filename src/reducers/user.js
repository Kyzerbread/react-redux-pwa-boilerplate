import { createSlice } from "@reduxjs/toolkit";

import { emailAndPasswordLogin } from "../firebase/firebase";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    firstName: "",
    lastName: "",
  },
  reducers: {
    register: () => {},
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

export const { register, login, logout } = userSlice.actions;

export default userSlice.reducer;
