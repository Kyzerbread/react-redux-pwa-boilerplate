import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { UserName } from "../../domain/user";

import { useAuthenticate } from "../../application/use-cases/useAuthenticate";

export default function Login() {
    const {
        register,
        login,
        logout,
        fetchUser, } = useAuthenticate();

    const [email, setEmail] = useState<UserName>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleSubmit(e: React.FormEvent) {
        setIsLoading(true);
        try {
            login(email, password)
        } catch (err) {
            // TODO: 
        }
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
            <Button variant="contained" onClick={handleSubmit}>
                Login
            </Button>
        </Box>
    );
}
