import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "./reducers/application";
import userSlice from "./reducers/user";

export const store = configureStore({
  reducer: {
    user: userSlice,
    application: applicationSlice,
  },
});
