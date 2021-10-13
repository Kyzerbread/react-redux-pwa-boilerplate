import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "./slices/applicationSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    application: applicationSlice,
  },
});
