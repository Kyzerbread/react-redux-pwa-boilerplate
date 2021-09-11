import React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import { useSelector } from "react-redux";

function GlobalSnackbar() {
  const open = useSelector((state) => state.application.isSnackbarOpen);

  const handleClose = () => {
    //
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
    </Snackbar>
  );
}

export default GlobalSnackbar;
