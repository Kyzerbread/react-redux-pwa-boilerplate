import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";

import { close } from "../../actions/application";

const DEFAULT_SNACKBAR_HIDE_DURATION = 6000; // 6 seconds

function GlobalSnackbar() {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.application.snackbarIsOpen);
  const message = useSelector((state) => state.application.snackbarMessage);
  const title = useSelector((state) => state.application.snackbarTitle);
  // const open = useSelector((state) => state.application.snackbarIsOpen);

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={DEFAULT_SNACKBAR_HIDE_DURATION}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity="error">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default GlobalSnackbar;
