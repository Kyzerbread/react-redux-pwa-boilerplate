import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Routes from "../routes";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return <Routes />;
}

export default App;
