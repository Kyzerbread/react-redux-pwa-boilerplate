import { login, logout } from "../reducers/user";

export function loginUser(user) {
  return async (dispatch) => {
    try {
      const userInfo = { email: user.email };

      dispatch(login(userInfo));
    } catch (err) {
      console.error(err);
    }
  };
}

export function logoutUser() {
  return async (dispatch) => {
    try {
      dispatch(logout());
    } catch (err) {
      console.error(err);
    }
  };
}
