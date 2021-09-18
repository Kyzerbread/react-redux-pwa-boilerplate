import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, blueGrey } from "@mui/material/colors";

import Routes from "../routes";
import GlobalSnackbar from "./snackbar/GlobalSnackbar";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { loginUser, logoutUser } from "../actions/user";
import { applicationDoneLoading } from "../actions/application";

const auth = getAuth();

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state) => state.application.applicationIsLoading
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: blueGrey[800],
      },
      secondary: {
        main: amber[600],
      },
    },
  });

  useEffect(() => {
    // authentication state listener
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(loginUser(user));
      } else {
        dispatch(logoutUser());
      }
      dispatch(applicationDoneLoading());
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <>
          <Routes />
        </>
      )}
      <GlobalSnackbar />
    </ThemeProvider>
  );
}

export default App;
