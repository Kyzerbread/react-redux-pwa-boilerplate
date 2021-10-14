import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: false,
    isAuthenticated: false,
    user: undefined,
  },
  reducers: {
    updateUser: (state, action) => {
      // const { email } = action.payload; // the user object will be here
      state.user = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
