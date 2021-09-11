import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";

import useRouter from "../../hooks/useRouter";

import { login } from "../../reducers/user";

import { registerWithEmailAndPassword } from "../../firebase";

import { LOGIN_URL } from "../../constants/urls";

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleRegister = async () => {
    try {
      const user = await registerWithEmailAndPassword(email, password);
      dispatch(login(user));
      router.history.push(LOGIN_URL);
    } catch (err) {
      console.err();
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        id="outlined-confirm-password-input"
        label="Confirm Password"
        type="password"
        value={confirmedPassword}
        onChange={(e) => setConfirmedPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleRegister}>
        Register
      </Button>
    </Box>
  );
}
