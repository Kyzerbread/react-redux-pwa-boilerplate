import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    firstName: "",
    lastName: "",
  },
  reducers: {
    login: (state, action) => {
      // const { email } = action.payload; // the user object will be here

      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { register, login, logout } = userSlice.actions;

export default userSlice.reducer;
