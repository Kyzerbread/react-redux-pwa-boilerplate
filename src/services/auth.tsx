import { IAuthService } from "../application/ports";

import { useCallback } from 'react';
// TODO : import user auth (firebase in this instance)
import { registerWithEmailAndPassword, loginWithEmailAndPassword } from "./firebase";


export function useAuthService(): IAuthService {
    const isLoading = false;
    const isAuthenticated = false;

    return {
        isLoading,
        isAuthenticated,
        register: useCallback(async (email, password) => {
            const credentials = registerWithEmailAndPassword(email, password);
        }, []),
        login: useCallback(async (email, password) => {
            console.log('LOGIN THE USER');
            const credentials = loginWithEmailAndPassword(email, password);
        }, []),
        logout: useCallback(async () => {
            console.log('LOGOUT THE USER');
        }, []),
        fetchCurrentUser: useCallback(async () => {
            return null;
        }, []),
    }
}