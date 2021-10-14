import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuthenticate } from "../../application/use-cases/useAuthenticate";

export default function Register() {

    const {
        register,
        login,
        logout,
        fetchUser, } = useAuthenticate();

    const [email, setEmail] = useState<Email>("");
    const [password, setPassword] = useState<string>("");
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleSubmit(e: React.FormEvent) {
        setIsLoading(true);
        register(email, password);
        setIsLoading(false);
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
            <Button variant="contained" onClick={handleSubmit}>
                Register
            </Button>
        </Box>
    );
}
