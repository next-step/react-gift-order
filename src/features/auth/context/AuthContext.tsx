import { createContext, useContext } from "react";

import { useLocalStorageState } from "@/shared/hooks/useLocalStorageState";

export interface AuthContextValue {
    isAuthenticated: boolean;
    nickname?: string;
    email?: string;
}

export const AUTH_STORAGE_KEY = "auth";

export const AuthContext = createContext<{
    authState: AuthContextValue;
    setAuthState: React.Dispatch<React.SetStateAction<AuthContextValue>>;
} | null>(null);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const [authState, setAuthState] = useLocalStorageState<AuthContextValue>(AUTH_STORAGE_KEY, {
        isAuthenticated: false,
        nickname: undefined,
        email: undefined,
    });

    return (
        <AuthContext.Provider
            value={{
                authState,
                setAuthState,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }
    return context;
};
