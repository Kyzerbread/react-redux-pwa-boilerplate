import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  USER_DASHBOARD_URL,
  LOGIN_URL,
  ADMIN_DASHBOARD_URL,
  TOS_URL,
  PP_URL,
} from "./constants/urls";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={TOS_URL}>
          <About />
        </Route>
        <Route path={PP_URL}>
          <Users />
        </Route>
        <Route path={LOGIN_URL}>
          <Users />
        </Route>
        <RequireAuth>
          <Route path={USER_DASHBOARD_URL}>
            <Home />
          </Route>
        </RequireAuth>
        <RequireAdminAuth>
          <Route path={ADMIN_DASHBOARD_URL}>
            <Home />
          </Route>
        </RequireAdminAuth>
      </Switch>
    </Router>
  );
}

function Home() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return <h2>Is isAuthenticated: {isAuthenticated.toString()}</h2>;
}

function About() {
  console.log("ABOUT");
  return <h2>About</h2>;
}

function Users() {
  console.log("USERS");
  return <h2>Users</h2>;
}

const RequireAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  if (!isAuthenticated) {
    return <Redirect to={LOGIN_URL} />;
  }
  return children;
};

const RequireAdminAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  if (!isAuthenticated) {
    return <Redirect to={LOGIN_URL} />;
  }
  return children;
};
