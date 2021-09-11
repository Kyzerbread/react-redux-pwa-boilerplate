import { openSnackbar, closeSnackbar } from "../reducers/application";

export function close() {
  return async (dispatch) => {
    dispatch(closeSnackbar());
    try {
    } catch (error) {}
  };
}

export function snackbarError(message, title) {
  return async (dispatch) => {
    dispatch(openSnackbar({ title, message }));
    try {
    } catch (error) {}
  };
}

export function snackbarSuccess(message, title) {
  return async (dispatch) => {
    dispatch(openSnackbar({ title, message, type: "success" }));
    try {
    } catch (error) {}
  };
}
