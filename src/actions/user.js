import { login } from "../reducers/user";

export function loginUser(user) {
  return async (dispatch) => {
    dispatch(login(user));
    try {
    } catch (error) {}
  };
}
