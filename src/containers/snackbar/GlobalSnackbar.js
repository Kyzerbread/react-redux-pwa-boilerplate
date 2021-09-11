import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";

import { close } from "../../actions/application";

function GlobalSnackbar() {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.application.snackbarIsOpen);
  const message = useSelector((state) => state.application.snackbarMessage);
  const title = useSelector((state) => state.application.snackbarTitle);
  // const open = useSelector((state) => state.application.snackbarIsOpen);
  console.log("open", open);

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
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
