import React from "react";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { amber, blueGrey } from "@material-ui/core/colors";
import { useSelector, useDispatch } from "react-redux";
import Routes from "../routes";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

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
    </ThemeProvider>
  );
}

export default App;
