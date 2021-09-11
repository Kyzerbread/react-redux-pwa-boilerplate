import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, blueGrey } from "@mui/material/colors";

import Routes from "../routes";
import GlobalSnackbar from "./snackbar/GlobalSnackbar";

function App() {
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
      <Routes />
      <GlobalSnackbar />
    </ThemeProvider>
  );
}

export default App;
