import React, { createContext, useContext, useState } from 'react';
import { USER_ID_KEY, ERROR } from './storageKeys';

interface LoginContextType {
    isLoggedIn: boolean;
    userId: string | null;
    login: (userId: string) => void;
    logout: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem(USER_ID_KEY));
    const [userId, setUserId] = useState<string | null>(() => localStorage.getItem(USER_ID_KEY));

    const login = (newUserId: string) => {
        localStorage.setItem('userId', newUserId);
        setIsLoggedIn(true);
        setUserId(newUserId);
    };

    const logout = () => {
        localStorage.removeItem(USER_ID_KEY);
        setIsLoggedIn(false);
        setUserId(null);
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, userId, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};

export function useLogin() {
    const ctx = useContext(LoginContext);
    if (!ctx) throw new Error(ERROR);
    return ctx;
}
