import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoginContextType {
    isLoggedIn: boolean;
    userId: string | null;
    login: (userId: string) => void;
    logout: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('userId'));
    const [userId, setUserId] = useState<string | null>(() => localStorage.getItem('userId'));

    const login = (newUserId: string) => {
        localStorage.setItem('userId', newUserId);
        setIsLoggedIn(true);
        setUserId(newUserId);
    };

    const logout = () => {
        localStorage.removeItem('userId');
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
    if (!ctx) throw new Error('LoginProvider 안에서 사용해야 함');
    return ctx;
}
