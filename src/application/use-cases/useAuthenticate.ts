import { useCallback } from "react";

import { useAuthService } from "../../services/auth";

export function useAuthenticate() {
  const {
    isLoading,
    isAuthenticated,
    register,
    login,
    logout,
    fetchCurrentUser,
  } = useAuthService();

  const fetchUser = useCallback(async () => {
    console.log("FETCHIN USER");
  }, [fetchCurrentUser]);

  return {
    isLoading,
    isAuthenticated,
    register,
    login,
    logout,
    fetchUser,
  };
}
