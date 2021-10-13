


import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, blueGrey } from "@mui/material/colors";

import Routes from "./Routes";
import GlobalSnackbar from "./components/GlobalSnackbar";

import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const isLoading = false;
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
