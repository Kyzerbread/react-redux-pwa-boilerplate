import React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";

const DEFAULT_SNACKBAR_HIDE_DURATION = 6000; // 6 seconds

export default function GlobalSnackbar() {
  const open = false;
  const message = 'eer';
  const title = 'title';
  // const open = useSelector((state) => state.application.snackbarIsOpen);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    // if (reason === 'clickaway') {
    //   return;
    // }

    // setOpen(false);
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

