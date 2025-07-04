import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoginContextType {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (token) setIsLoggedIn(true);
    }, []);

    const login = (token: string) => {
        sessionStorage.setItem('authToken', token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        sessionStorage.removeItem('authToken');
        setIsLoggedIn(false);
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};

export function useLogin() {
    const ctx = useContext(LoginContext);
    if (!ctx) throw new Error('LoginProvider 안에서 사용해야 함');
    return ctx;
}
