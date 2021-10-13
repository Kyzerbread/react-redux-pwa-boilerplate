import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useRouteMatch,
} from "react-router-dom";
import { useSelector } from "react-redux";

import {
    USER_DASHBOARD_URL,
    LOGIN_URL,
    REGISTER_URL,
    ADMIN_BASE_URL,
    TOS_URL,
    PP_URL,
} from "./constants/urls";

import Navigation from "./components/Navigation";

import Register from "./pages/Register";
import Login from "./pages/Login";

import UserDashboard from "./components/UserDashboard";

export default function Routes() {
    return (
        <Router>
            <Switch>
                {/* PUBLIC ROUTES */}
                <Route path={REGISTER_URL}>
                    <Register />
                </Route>
                <Route path={LOGIN_URL}>
                    <Login />
                </Route>
                <Route path={TOS_URL}>
                    <About />
                </Route>
                <Route path={PP_URL}>
                    <Users />
                </Route>
                {/* USER AUTHENTICATED APPLICATION */}
                <ProtectedRoute exact path={USER_DASHBOARD_URL}>
                    <UserApplication />
                </ProtectedRoute>
                {/* ADMIN AUTHENTICATED APPLICATION */}
                <AdminProtectedRoute path={ADMIN_BASE_URL}>
                    <AdminApplication />
                </AdminProtectedRoute>

                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

function UserApplication() {
    let { path, url } = useRouteMatch();
    return (
        <Navigation>
            <Switch>
                <Route exact path={path}>
                    <UserDashboard />
                </Route>
                <Route path={`${path}/users`}></Route>
            </Switch>
        </Navigation>
    );
}

function AdminApplication() {
    let { path, url } = useRouteMatch();
    return (
        <Navigation>
            <Switch>
                <Route exact path={path}>
                    <AdminDash />
                </Route>
                <Route path={`${path}/users`}></Route>
            </Switch>
        </Navigation>
    );
}

function NoMatch() {
    return (
        <div>
            <h3>No match</h3>
        </div>
    );
}

function AdminDash() {
    console.log("AdminDashboard");
    return <h2>About</h2>;
}

function About() {
    console.log("ABOUT");
    return <h2>About</h2>;
}

function Users() {
    console.log("USERS");
    return <h2>Users</h2>;
}

function ProtectedRoute(props: { [x: string]: any; children: any; }) {
    const { children, ...rest } = props
    const isAuthenticated = false;
    return (
        <Route
            {...rest}
            render={() => {
                return isAuthenticated ? children : <Redirect to="/login" />;
            }}
        />
    );
}

function AdminProtectedRoute(props: { [x: string]: any; children: any; }) {
    const { children, ...rest } = props

    const isAuthenticated = false;
    return (
        <Route
            {...rest}
            render={() => {
                return isAuthenticated ? children : <Redirect to="/login" />;
            }}
        />
    );
}
